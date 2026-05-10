import json
import re

def extract_photos_final_attempt(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Split by panels
    panels = re.split(r'class\s*=\s*["\']split-panel["\']', html)
    if len(panels) < 3:
        return [], []
    
    snap_html = panels[1]
    portrait_html = panels[2]
    
    def get_imgs(content, is_portrait=False):
        results = []
        # Find all photo-item divs
        items = re.findall(r'<div class="photo-item[^"]*">(.*?)</div>', content, re.DOTALL)
        
        for item in items:
            # Extract src from img tag inside the div
            src_match = re.search(r'src=["\']([^"\']+)["\']', item)
            if not src_match:
                continue
            src = src_match.group(1)
            if "images/" not in src:
                continue
            
            if is_portrait:
                # Look for data-caption inside the img tag
                # Using a very permissive regex for attributes
                caption_match = re.search(r'data-caption\s*=\s*"(.*?)"', item, re.DOTALL)
                if not caption_match:
                    caption_match = re.search(r"data-caption\s*=\s*'(.*?)'", item, re.DOTALL)
                
                if caption_match:
                    caption = caption_match.group(1)
                    caption = caption.replace('<br>', '\n').replace('<br/>', '\n').replace('<br />', '\n')
                    caption = caption.replace('&amp;', '&').replace('&quot;', '"')
                else:
                    caption = ""
            else:
                alt_match = re.search(r'alt=["\']([^"\']+)["\']', item)
                caption = alt_match.group(1) if alt_match else "Snap Photo"
            
            results.append({"src": src, "caption": caption.strip()})
        return results

    snap = get_imgs(snap_html, False)
    portrait = get_imgs(portrait_html, True)
    return snap, portrait

def main():
    html_file = r'd:\自作HP\gallery.html'
    snap, portrait = extract_photos_final_attempt(html_file)
    
    data = {
        "snap": snap,
        "portrait": portrait
    }
    
    with open(r'd:\自作HP\photos.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
