const wasteData = {
  R: {
    name: "Recyclable",
    icon: "fas fa-recycle",
    color: "recyclable",
    description:
      "This item is made of recyclable materials that can be processed and transformed into new products, helping to reduce waste and conserve natural resources.",
    environmentalInfo:
      "Recycling this item can save energy, reduce greenhouse gas emissions, and decrease the need for raw materials. Every recycled item contributes to a circular economy and helps protect our environment.",
    steps: [
      "Clean the item thoroughly to remove any food residue or contaminants",
      "Remove any non-recyclable parts like caps, labels, or mixed materials if possible",
      "Check your local recycling guidelines as requirements may vary by location",
      "Place the clean item in your designated recycling bin or take to a recycling center",
      "Ensure the item is dry to prevent contamination of other recyclables",
    ],
    tips: [
      "Rinse containers with water to remove food residue",
      "Don't crush aluminum cans if your recycling center prefers them intact",
      "Keep recyclables separate from regular trash to avoid contamination",
      "Check recycling symbols and numbers to ensure proper sorting",
      "When in doubt, contact your local waste management facility for guidance",
    ],
  },
  O: {
    name: "Organic Waste",
    icon: "fas fa-apple-alt",
    color: "organic",
    description:
      "This is organic waste that comes from living organisms and can naturally decompose. It's perfect for composting and creating nutrient-rich soil for plants and gardens.",
    environmentalInfo:
      "Composting organic waste reduces methane emissions from landfills, creates valuable fertilizer, and helps soil retain moisture. It's one of the most effective ways to reduce your environmental footprint.",
    steps: [
      "Remove any packaging materials, stickers, or non-organic attachments",
      "Cut large items into smaller pieces to speed up decomposition",
      "Add to your home compost bin or municipal organic waste collection",
      "Mix with brown materials (dry leaves, paper) if composting at home",
      "Turn compost regularly and maintain proper moisture levels",
      "Use finished compost in your garden after 3-6 months",
    ],
    tips: [
      "Balance green materials (food scraps) with brown materials (dry leaves, paper)",
      "Avoid composting meat, dairy, or oily foods in home compost systems",
      "Keep compost moist but not waterlogged for optimal decomposition",
      "Add organic waste to compost in small amounts to maintain balance",
      "Consider vermicomposting (worm composting) for apartment living",
      "Finished compost should smell earthy and look like dark, crumbly soil",
    ],
  },
};

// Get DOM elements
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");
const uploadArea = document.getElementById("uploadArea");
const uploadContent = document.getElementById("uploadContent");
const imageDisplay = document.getElementById("imageDisplay");
const uploadedImage = document.getElementById("uploadedImage");
const fileName = document.getElementById("fileName");
const loading = document.getElementById("loading");
const uploadActions = document.getElementById("uploadActions");
const classifyBtn = document.getElementById("classifyBtn");
const clearBtn = document.getElementById("clearBtn");
const noResults = document.getElementById("noResults");
const results = document.getElementById("results");

let selectedFile = null;

// File selection
browseBtn.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (e) => {
  if (e.target.files[0]) handleFile(e.target.files[0]);
});

// Drag and drop
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("drag-over");
});

uploadArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("drag-over");
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("drag-over");
  if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
});

// Handle file selection
function handleFile(file) {
  if (!file.type.startsWith("image/")) {
    alert("Please select an image file");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    alert("File too large! Please select a file under 10MB");
    return;
  }

  selectedFile = file;

  // Display the image
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage.src = e.target.result;
    fileName.textContent = file.name;

    uploadContent.hidden = true;
    imageDisplay.hidden = false;
    uploadActions.hidden = false;

    results.hidden = true;
    noResults.style.display = "flex";
  };
  reader.readAsDataURL(file);
}

// Clear button
clearBtn.addEventListener("click", () => {
  selectedFile = null;
  fileInput.value = "";
  uploadActions.hidden = true;

  uploadContent.hidden = false;
  imageDisplay.hidden = true;

  results.hidden = true;
  noResults.style.display = "flex";
});

// Classify button
classifyBtn.addEventListener("click", async () => {
  if (!selectedFile) return;

  uploadContent.hidden = true;
  imageDisplay.hidden = true;
  loading.hidden = false;
  uploadActions.hidden = true;

  try {
    // Real backend call
    const result = await callAPI(selectedFile);

    // Use result.class ("O" or "R") directly
    const predictedClass = result.class;
    const data = wasteData[predictedClass];
    if (!data) throw new Error("Invalid prediction class");

    document.getElementById(
      "resultIcon"
    ).className = `result-icon ${data.color}`;
    document.getElementById("resultIconType").className = data.icon;
    document.getElementById("resultType").textContent = data.name;
    document.getElementById("confidenceValue").textContent =
      result.confidence + "%";
    document.getElementById("resultDescription").textContent = data.description;
    document.getElementById("environmentalInfo").textContent =
      data.environmentalInfo;

    // Disposal steps
    const stepsList = document.getElementById("disposalSteps");
    stepsList.innerHTML = "";
    data.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });

    // Tips
    const tipsList = document.getElementById("additionalTips");
    tipsList.innerHTML = "";
    data.tips.forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      tipsList.appendChild(li);
    });

    noResults.style.display = "none";
    results.hidden = false;
  } catch (error) {
    alert("Classification failed. Please try again.");
  } finally {
    loading.hidden = true;
    imageDisplay.hidden = false;
    uploadActions.hidden = false;
  }
});

// Call backend
async function callAPI(imageFile) {
  const formData = new FormData();
  formData.append("file", imageFile);

  // backend port
  const response = await fetch("http://localhost:5000/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("API request failed");
  return await response.json();
}
