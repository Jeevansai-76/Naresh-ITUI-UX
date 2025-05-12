const extObj = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

document.getElementById("btn-all").addEventListener("click", () => renderExtensions("all"));
document.getElementById("btn-active").addEventListener("click", () => renderExtensions("active"));
document.getElementById("btn-inactive").addEventListener("click", () => renderExtensions("inactive"));

function renderExtensions(filter) {
  const container = document.getElementById("extensions-list");
  container.innerHTML = "";

  const filtered = extObj.filter((v) => {
    if (filter === "active") return v.isActive;
    if (filter === "inactive") return !v.isActive;
    return true;
  });

  filtered.forEach((v) => {
    const extDiv = document.createElement("div");
    extDiv.style.background = "hsl(225, 23%, 24%)";
    extDiv.style.borderRadius = "12px";
    extDiv.style.border = "1px solid transparent";
    extDiv.style.padding = "20px";
    extDiv.style.color = "white";
    extDiv.style.fontFamily = "sans-serif";
    extDiv.style.display = "flex";
    extDiv.style.flexDirection = "column";
    extDiv.style.justifyContent = "space-between";
    extDiv.style.alignItems = "center";
    extDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

    const left = document.createElement("div");
    left.style.display = "flex";

    const icon = document.createElement("img");
    icon.src = v.logo;
    icon.style.height = "37px";
    icon.style.width = "37px";
    icon.style.marginRight = "15px";

    const text = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = v.name;
    title.style.fontSize = "14px";

    const desc = document.createElement("p");
    desc.textContent = v.description;
    desc.style.fontSize = "12px";
    desc.style.color = "#cbd5e1";
    desc.style.marginTop = "5px";
    desc.style.fontWeight = "200";

    text.appendChild(title);
    text.appendChild(desc);

    left.appendChild(icon);
    left.appendChild(text);

    const right = document.createElement("div");
    right.style.width = "95%";
    right.style.display = "flex";
    right.style.justifyContent = "space-between";
    right.style.gap = "10px";
    right.style.marginTop = "15px";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeBtn.style.padding = "6px 12px";
    removeBtn.style.border = "1px solid white";
    removeBtn.style.background = "transparent";
    removeBtn.style.color = "white";
    removeBtn.style.borderRadius = "6px";
    removeBtn.style.cursor = "pointer";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = v.isActive;
    toggle.style.accentColor = "red";

    right.appendChild(removeBtn);
    right.appendChild(toggle);

    extDiv.appendChild(left);
    extDiv.appendChild(right);

    document.getElementById("extensions-list").appendChild(extDiv);
  });
}

renderExtensions("all");

function change_bg()
{
    const img  = document.getElementById('img');
    const isLight = document.body.classList.toggle("light");
    if(isLight)
    {
        img.src = './assets/images/icon-sun.svg';
    }
    else
    {
        img.src = './assets/images/icon-moon.svg';
    }
}
