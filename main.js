const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));


// document.addEventListener('DOMContentLoaded', function() {
//   // Function to generate random value between 1 and 900
//   function getRandomValue() {
//     return Math.floor(Math.random() * 900) + 1;
//   }
//   function getRandomValue2() {
//     return Math.floor(Math.random() * 2) + 1;
//   }

//   // Select the title element
//   const title = document.querySelector('.title');

//   // Set the random values for font-variation-settings
//   const randomRect = getRandomValue();
//   const randomBack = getRandomValue();
//   const randomWght = getRandomValue();
//   const randomElsh = getRandomValue2();

//   // Update font-variation-settings with random values
//   title.style.fontVariationSettings = `"ELSH" ${randomElsh}, "RECT" ${randomRect}, "BACK" ${randomBack}, "wght" ${randomWght}`;

//   // Add event listener for click to animate and redirect
//   title.addEventListener('click', function () {
//     title.classList.add('animate-title');


//   });
// });

window.onload = () => {

  


  // const getRandomColor = () => {
  //   const colors = ['	rgb(245,245,245)','rgb(220,220,220)', 'white']; 
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };
  

  window.addEventListener('scroll', function() {
    const textElement = document.getElementById('animatedText');

    const scrollPosition = window.scrollY;
  
    // Calculate the scale factor
    const scaleFactor = 1 - (scrollPosition / 500); // Adjust the scale factor as needed
  
    // Apply transform-origin and scale
    textElement.style.transformOrigin = "top right"; // Ensure anchor point is top-right
    textElement.style.transform = `scale(${Math.max(scaleFactor, 0.15)})`;
  

  
    // Optional: If you want to adjust position or other properties
    textElement.style.top = '10px';
    textElement.style.right = '0';
  
  
  });
  

  
  

  slider.addEventListener("input", (event) => {
    const fontSize = event.target.value + "px"; // Set font size based on slider value
    
    // Apply font size to all textarea cells
    const cells = container.querySelectorAll(".textarea-cell");
    cells.forEach((cell) => {
      // Update the font size directly using style.fontSize
      cell.style.fontSize = fontSize;
    });
  });

  

  const contentLayer = document.getElementById("contentLayer");

document.addEventListener("wheel", function (e) {
  // Vertical scroll for the entire page
  if (e.deltaY == 0) {
    window.scrollBy(0, e.deltaY); 
  }

  if (e.deltaX == 0) {
   
    const scrollAmount = e.deltaY;
    contentLayer.scrollTo({
      top: 0, 
      left: contentLayer.scrollLeft + scrollAmount * 3,
      behavior: "smooth" 
    });
  }
});

  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };

  const letters = charRange("A", "O");

  // Create column headers (A-I) in the first row
  letters.forEach(createLabel);

  // Create row headers (1-99) and input fields
  range(1, 99).forEach(number => {
    createLabel(number); // Create the row header (number)
    letters.forEach(letter => {
      const textarea = document.createElement("textarea");
      textarea.id = letter + number;
      textarea.ariaLabel = letter + number;
      textarea.classList.add("textarea-cell"); // Add a class for additional styling

      // textarea.style.backgroundColor = getRandomColor();

      // if (number % 2 !== 0 || letters.indexOf(letter) % 2 !== 0) {
      //   textarea.style.backgroundColor = "lightgrey"; // Choose your color
      // }
    
      if (letters.indexOf(letter) % 2 !== 0) {
        textarea.style.backgroundColor = "#F8F8F8"; // Choose your color
      }


      if (number % 2 !== 0 ) {
          textarea.style.backgroundColor = "#E0E0E0"; // Choose your color
        }

      textarea.addEventListener("mousemove", (event) => expandCell(event.target, event));
      textarea.addEventListener("mouseout", () => resetGridLayout());

      container.appendChild(textarea);

      // Set default values for specific cells
      if (letter === "A") {
        // textarea.classList.add("textarea-cell-rotate");
      }
      if (number == 1 || letter === "B") {
        textarea.style.fontFamily="'gridlite-pe-variable', sans-serif",
        textarea.style.fontVariationSettings =  "'ELSH' 2, 'RECT' 1, 'BACK' 1, 'wght' 900"
      }
     

      if (letter === "D" && number === 1) {
        textarea.value = "Keywords";
      
      }
      if (letter === "M" && number === 1 || letter ==="N" && number === 1 || letter === "O" && number === 1) {
        textarea.value = "Related Concepts";
      }
      if (letter === "C" && number === 1) {
        textarea.value = "Author/Time";
       
      }
      if (letter === "B" && number === 1) {
        textarea.value = "Title"; 
      }
      if (letter === "A" && number === 1) {
        textarea.value = "Chapter";
      }
      if (letter === "G" && number === 1) {
        textarea.value = "Main Theme";
      }
      if (letter === "H" && number === 1) {
        textarea.value = "Excerpt";
      }
      if (letter === "I" && number === 1) {
        textarea.value = "Tone";
      }
      if (letter === "J" && number === 1) {
        textarea.value = "Questions";
      }
      if (letter === "K" && number === 1) {
        textarea.value = "Cultural Philosophical";
      }
      if (letter === "L" && number === 1) {
        textarea.value = "Img";
      }
    });
  });

  let isExpandable = false; // Global variable to toggle expansion
  let isRunning = false; // Prevents multiple simultaneous operations
  
  const resetContainerStyle = () => {
    updateGridLayout();
    mergeCell();
    mergeCell2();
    isExpandable = !isExpandable;
 
  };
  const buttonLayout = document.querySelector('.button-layout');

// Add a click event listener to the button
buttonLayout.addEventListener('click', () => {
  // Trigger the resetContainerStyle function when the button is clicked
  resetContainerStyle();
  
  console.log('click')
});

// const mergeCell = () =>{

//   isRunning = true;

//   if (isExpandable) {
//   document.getElementById('D1').style.gridColumn = 'span 3';
//   document.getElementById('E1').style.display = 'none'; 
//   document.getElementById('F1').style.display = 'none'; 
//   } else {
//     document.getElementById('D1').style.gridColumn = 'span 0';
//     document.getElementById('E1').style.display = 'none'; 
//     document.getElementById('F1').style.display = 'none'; 
//   }

//   isRunning = false;
//   }
document.getElementById('D1').style.gridColumn = 'span 3';
document.getElementById('E1').style.display = 'none'; 
document.getElementById('F1').style.display = 'none';
const mergeCell=()=>{
  if (isRunning) return; // Prevent multiple simultaneous operations
  isRunning = true;
  if (isExpandable) {
  document.getElementById('D1').style.gridColumn = 'span 3';
  document.getElementById('E1').style.display = 'none'; 
  document.getElementById('F1').style.display = 'none'; 
} else {
  document.getElementById('D1').style.gridColumn = '';
  document.getElementById('E1').style.display = ''; 
  document.getElementById('F1').style.display = ''; 
}
isRunning = false;

}

document.getElementById('M1').style.gridColumn = 'span 3';
document.getElementById('N1').style.display = 'none'; 
document.getElementById('O1').style.display = 'none';
const mergeCell2=()=>{
  if (isRunning) return; // Prevent multiple simultaneous operations
  isRunning = true;
  if (isExpandable) {
  document.getElementById('M1').style.gridColumn = 'span 3';
  document.getElementById('N1').style.display = 'none'; 
  document.getElementById('O1').style.display = 'none'; 
} else {
  document.getElementById('M1').style.gridColumn = '';
  document.getElementById('N1').style.display = ''; 
  document.getElementById('O1').style.display = ''; 
}
isRunning = false;

}



const updateGridLayout = () => {
  if (isRunning) return; // Prevent multiple simultaneous operations
  isRunning = true;

  const container = document.getElementById('container'); // Make sure you get the container element

  if (isExpandable) {
    // Set expanded grid layout
    container.style.gridTemplateColumns = "30px 2fr 3fr 3fr repeat(3, 1fr) 3fr 5fr 1fr 2fr 4fr 5fr repeat(3, 1fr)";
    container.style.gridTemplateRows = "30px 1fr 3fr repeat(97, 5fr)";
  } else {
    // Set default grid layout
    container.style.gridTemplateColumns = "30px repeat(15, 1fr)";
    container.style.gridTemplateRows = "30px repeat(99, 1fr)";
  }

  console.log(`Grid layout updated. Expandable: ${isExpandable}`);
  isRunning = false;
};
// Reset the expand/collapse behavior

  // Function to expand the hovered cell
  const expandCell = (cell, event) => {
    if (isRunning || !isExpandable) {
      return; // Prevent running multiple expansions or expansion when not allowed
    }
  
    isRunning = true;

    if (isExpandable) {
    const cellId = cell.id; // e.g., "A1", "B5"
    const colLetter = cellId.charAt(0); // Column letter (e.g., "A")
    const rowNumber = parseInt(cellId.slice(1)); // Row number (e.g., "1")

    const colIndex = letters.indexOf(colLetter); // Column index (A -> 0, B -> 1, ...)
    const rowIndex = rowNumber; // Convert row number to index

    const gridColumnCount = letters.length; // Total columns (9)
    const gridRowCount = 99; // Total rows

    const rect = container.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate dynamic sizes based on mouse position
    const dynamicColSize = (mouseX / rect.width) * 5 + 1;
    const dynamicRowSize = (mouseY / rect.height) * 30 + 1;

  
    const cells = container.querySelectorAll("textarea");
    cells.forEach(otherCell => {
      const otherCellId = otherCell.id;
      const otherColLetter = otherCellId.charAt(0);
      const otherRowNumber = parseInt(otherCellId.slice(1));

      // Apply border for the hovered row and column
      if (otherColLetter === colLetter || otherRowNumber === rowNumber) {
        // otherCell.style.backgroundColor= "lightgrey"
        otherCell.style.border = "1px dashed rgb(22, 92, 28)"; 
        // otherCell.style.background = "rgb(22, 92, 28)"; 
      } else {
        // otherCell.style.background = ""; 
        // otherCell.style.backgroundColor = ""
      }
    });

    
    if (colIndex === 0) {
      // Special case for column "A"
      container.style.gridTemplateColumns = `30px ${dynamicColSize}fr repeat(${gridColumnCount - 1}, 1fr)`;
    } else if (colIndex === gridColumnCount - 1) {
      container.style.gridTemplateColumns = `30px repeat(${colIndex - 1}, 1fr) 1fr ${dynamicColSize}fr`;
    } else {
      container.style.gridTemplateColumns = `30px repeat(${colIndex}, 1fr) ${dynamicColSize}fr repeat(${gridColumnCount - colIndex - 1}, 1fr)`;
    }

    // Adjust rows for the hovered cell
    container.style.gridTemplateRows = `30px repeat(${rowIndex-1}, 1fr) ${dynamicRowSize}fr repeat(${gridRowCount - rowIndex - 1}, 1fr)`;}
    else{
  
    }
    isRunning = false;
  };

  const resetGridLayout = () => {
    isRunning = true;

    if (isExpandable) {

      container.style.display = "grid";
      container.style.gridTemplateColumns = "30px repeat(15, 1fr)";
      container.style.gridTemplateRows = "30px repeat(99, 1fr)";
    
    } else {
      // Set default grid layout
      container.style.display = "grid";
      container.style.gridTemplateColumns = "30px 2fr 3fr 3fr repeat(3, 1fr) 3fr 5fr 1fr 2fr 4fr 5fr repeat(3, 1fr)";
      container.style.gridTemplateRows = "30px 1fr 3fr repeat(97, 5fr)";
    }

    // Reset all cells back to their normal size
    const cells = container.querySelectorAll("textarea");
    cells.forEach(cell => {
      cell.style.width = "100%";
      cell.style.height = "100%";
      // cell.style.backgroundColor = "";
      cell.style.textAlign = "left";
      cell.style.border = "";

    });
 
    isRunning = false;

  };

  fetchData();
  // async function fetchData() {
  //   try {
  //     const response = await fetch('./shadowbook.json');
  
  //     if (!response.ok) {
  //       throw new Error("Could not fetch resource");
  //     }
  
  //     const data = await response.json();
  //     data.forEach((item, index) => {
  //       const rowIndex = index + 1; // Start populating from row 1
  
  //       // Populate the cells
  //       const nameCell = document.getElementById(A${rowIndex});
  //       const employeesCell = document.getElementById(B${rowIndex});
  //       const ceoCell = document.getElementById(C${rowIndex});
  //       const ratingCell = document.getElementById(D${rowIndex});
  //       const toneCell = document.getElementById(E${rowIndex});
  //       const cultural_philosophical_referencesCell = document.getElementById(F${rowIndex});
  //       const key_ideas_questionsCell = document.getElementById(G${rowIndex});
  //       const related_concepts = document.getElementById(H${rowIndex});
  //       // const impact = document.getElementById(I${rowIndex});
  
  //       if (nameCell) nameCell.value = item.category ? item.category + ' ' + '*'.repeat(30) : "*".repeat(30); // Add '*' to the value
  //       if (employeesCell) employeesCell.value = item.keywords ? item.keywords + ' ' + '*'.repeat(30) : "*".repeat(30);
  //       if (ceoCell) ceoCell.value = item.main_themes ? item.main_themes + ' ' + '*'.repeat(30) : "*".repeat(30);
  //       if (ratingCell) ratingCell.value = item.context ? item.context + ' ' + '*'.repeat(30) : "*".repeat(30);
  //       if (toneCell) toneCell.value = item.tone ? item.tone + ' ' + '*'.repeat(30) : "*".repeat(30);
  //       if (cultural_philosophical_referencesCell) cultural_philosophical_referencesCell.value = item.cultural_philosophical_references ? item.cultural_philosophical_references + ' ' + '*'.repeat(30) : "*".repeat(30);
  //       if (key_ideas_questionsCell) key_ideas_questionsCell.value = item.key_ideas_questions ? item.key_ideas_questions + ' ' + '*'.repeat(30) : "*".repeat(30);
  //       if (related_concepts) related_concepts.value = item.related_concepts ? item.related_concepts + ' ' + '*'.repeat(30) : "*".repeat(30);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function fetchData() {
    try {
      const response = await fetch('./shadowbook.json');
  
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
  
      const data = await response.json();
      const fields = [
        { key: 'chapter', col: 'A' },
        { key: 'category', col: 'B' },
        { key: 'author', col: 'C' },
        { key: 'keywordf', col: 'D' },
        { key: 'keywords', col: 'E' },
        { key: 'keywordt', col: 'F' },
        { key: 'main_themes', col: 'G' },
        { key: 'context', col: 'H' },
        { key: 'tone', col: 'I' },
        { key: 'key_ideas_questions', col: 'J' },
        { key: 'cultural_philosophical_references', col: 'K' },
        { key: 'image', col: 'L' },
        { key: 'related_conceptf', col: 'M' },
        { key: 'related_concepts', col: 'N' },
        { key: 'related_conceptt', col: 'O' }
      ];
  
      data.forEach((item, index) => {
        const rowIndex = index + 2; // Start populating from row 2
  
        // Loop over each field to fill the cells dynamically
        fields.forEach(field => {
          const cell = document.getElementById(`${field.col}${rowIndex}`);
          const value = item[field.key];
  
          if (cell) {
            if (field.key === 'image' && value) {
              // Create an img element and set its source to the image URL
              const img = document.createElement('img');
              cell.style.backgroundImage = `url(${value})`;
              cell.style.backgroundSize = "contain"; // Ensure the image fits the cell
              cell.style.backgroundPosition = "center"; // Center the image
              cell.style.backgroundRepeat = "no-repeat"; // Avoid repeating the image
              // Set a fixed height and width for the cell to display the background image
              // cell.style.height = '200px'; 
              // cell.style.width = '200px'; 

              
              // Check if the image URL is being correctly set
              console.log("Image URL:", img.src);
  
              // Append the image to the cell
              cell.innerHTML = ''; // Clear existing content
              cell.appendChild(img);
            } else {
              // For other fields, set the value directly in the textarea
              cell.value = value;
            }
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  
    // Check for empty textareas and update them
    const cells1 = document.querySelectorAll("textarea");
    cells1.forEach(blankCell => {
      // Check if the textarea is empty
      if (blankCell.value.trim() === "") {
        // If empty, set its value to "*"
        blankCell.value = "";
      }
    });
  
  
  
  fetchData();

  async function fetchData() {
    try {
      let allContents = []; // Array to store all contents from multiple pages
      let page = 1; // Start from the first page
      const perPage = 20; // Number of items per page
  
      // Keep fetching pages until no more contents are available
      let hasMoreContent = true;
      
      while (hasMoreContent) {
        // Construct the URL with pagination
        const url = `https://api.are.na/v2/channels/shadowbook/contents?page=${page}&per_page=${perPage}`;
        
        const response = await fetch(url);
        const data = await response.json();
  
        // Log the response to inspect if it includes content or if the page limit is reached
        console.log("API Response:", data);
  
        // Access the 'contents' array from the API response
        const contentsArray = data.contents;
  
        if (contentsArray.length > 0) {
          allContents = allContents.concat(contentsArray); // Append the contents to the allContents array
          page++; // Move to the next page
        } else {
          hasMoreContent = false; // No more contents, stop the loop
        }
      }
  
      // Once all pages are fetched, render the contents
      renderContents(allContents);
  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function renderContents(contentsArray) {
    const contentLayer = document.getElementById("contentLayer");
  
    // Loop through the contents array and create a <div> with <p> for each item
    contentsArray.forEach(item => {
      // Create a new div and paragraph element
      const scrollLayerDiv = document.createElement("div");
      scrollLayerDiv.classList.add("scroll-layer-text");
  
      const paragraph = document.createElement("p");
  
      // Check if the item contains some content (e.g., title or text) and insert it into the <p> element
      if (item.content) {
        let fullContent = item.content;  // Full content
        let truncatedContent = fullContent.substring(0, 200) ;  // Truncated content
      
        // Create a paragraph element
      
        if (fullContent.length > 200) {
          // Create the 'Read More' link
          const readMoreLink = document.createElement("span");
          readMoreLink.textContent = "(...)";
          readMoreLink.classList.add("read-more");
        
          // Initially set the truncated content
          paragraph.textContent = truncatedContent + " ";
          paragraph.appendChild(readMoreLink);
        
          // Event listener to toggle content
          readMoreLink.addEventListener("click", () => {
            if (readMoreLink.textContent === "(...)") {
              // Show full content
              paragraph.textContent = fullContent + " ";
              readMoreLink.textContent = " (less)";
              paragraph.appendChild(readMoreLink); // Reappend the link
            } else {
              // Show truncated content
              paragraph.textContent = truncatedContent + " ";
              readMoreLink.textContent = "(...)";
              paragraph.appendChild(readMoreLink); // Reappend the link
            }
          });
        } else {
          // If content is short, just show it as is
          paragraph.textContent = fullContent;
        }
        
      
        // Append the paragraph to your container
        document.body.appendChild(paragraph);  // Assuming appending to body or a specific container
      
      } else {
        return; // If there's no content, do nothing
      }
      
      // paragraph.addEventListener("click", function () {
      //   paragraph.classList.toggle("expand");
      // });
  
      // Append the paragraph to the div
      scrollLayerDiv.appendChild(paragraph);
  
      // Append the div to the contentLayer
      contentLayer.appendChild(scrollLayerDiv);
    });
  }


const elements = document.querySelectorAll("textarea, div, span, p, h1, h2, h3, h4, h5, h6");

elements.forEach((el) => {
  let text = el.textContent || el.value; // Get text from elements, handle textarea separately
  
  // Handle HTML elements (div, p, span, etc.)
  if (text && (el.tagName !== 'TEXTAREA' && el.tagName !== 'INPUT')) {
    const regex = /\bshadowbook\b/gi; // Case-insensitive check for the word "sound"
    
    if (regex.test(text)) {
      // Replace "sound" with a span to apply the style
      const updatedText = el.innerHTML.replace(regex, (match) => {
        return `<span style="font-family: 'gridlite-pe-variable', sans-serif;">${match}</span>`;
      });
      el.innerHTML = updatedText; // Apply the updated HTML to the element
    }
  }
  
  // Handle textarea and input elements separately, since they can't have HTML inside them
  if ((el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') && text) {
    const regex = /\bshadowbook\b/gi;
    if (regex.test(text)) {
      // We can't apply HTML, so just change the font for the entire text (limited solution)
      el.style.fontFamily = "'gridlite-pe-variable', sans-serif";
   
    }
  }
});


}
};





