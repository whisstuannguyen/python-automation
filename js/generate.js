// generate.js
document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll(".myLabel");
    const textarea = document.getElementById("myTextArea");
    let currentIndex = 0;
    const clickedLabels = new Set();
  
    const initialTexts = [
      "# open browser navigate to the test website\ndriver.get(\"https://www.saucedemo.com/\")\nassert driver.title == 'Swag Labs', 'Title got an error'\n\n# create xpath variable\ntxt_username = driver.find_element(By.ID, \"user-name\")\ntxt_password = driver.find_element(By.XPATH, \"//*[@id='password']\")\nbtn_login = driver.find_element(By.ID, \"login-button\")\n",
      "# type username to textbox\nassert txt_username.is_enabled(), 'txtUserName got an error'\ntxt_username.send_keys(\"standard_user\")\n\n",
      "# type password to textbox\nassert txt_password.is_enabled(), 'txtPassword got an error'\ntxt_password.send_keys(\"secret_sauce\")\n\n",
      "# click on Login button\nassert btn_login.is_enabled(), 'btnLogin got an error'\nbtn_login.click()\n\n",
      "# verify automatically navigate to next site\nassert driver.current_url == 'https://www.saucedemo.com/inventory.html', 'Site redirects incorrectly'"
    ];
  
    function handleLabelClick(index) {
      if (!clickedLabels.has(index)) {
        if (currentIndex === index) {
          textarea.value += (textarea.value ? "\n" : "") + initialTexts[index];
          currentIndex++;
          clickedLabels.add(index);
        }
      }
    }
  
    function clickHandler() {
      handleLabelClick(parseInt(this.dataset.index));
    }
  
    labels.forEach((label, index) => {
      label.dataset.index = index;
      label.addEventListener("click", clickHandler);
    });
  });

//-----------------------
document.addEventListener("DOMContentLoaded", function() {
  const labels = document.querySelectorAll(".myLabel1");
  const textarea = document.getElementById("myTextArea1");
  let currentIndex = 0;
  const clickedLabels = new Set();

  const initialTexts = [
    "# open browser navigate to the test website\ndriver.get(\"https://www.saucedemo.com/\")\nassert driver.title == 'Swag Labs', 'Title got an error'\n\n",
    "# type username to textbox\ntxt_username.send_keys(\"standard_user123\")\nassert txt_username.is_enabled(), 'txtUserName got an error'\n\n",
    "# type password to textbox\ntxt_password.send_keys(\"secret_sauce\")\nassert txt_password.is_enabled(), 'txtPassword got an error'\n\n",
    "# click on Login button\nbtn_login.click()\nassert btn_login.is_enabled(), 'btnLogin got an error'\n\n",
    "# verify error\nassert driver.find_element(By.XPATH, \"//*[@id='login_button_container']//*[text()='Epic sadface: Username and password do not match any user in this service']\").is_displayed(), 'lblError is not displayed'"
  ];

  function handleLabelClick(index) {
    if (!clickedLabels.has(index)) {
      if (currentIndex === index) {
        textarea.value += (textarea.value ? "\n" : "") + initialTexts[index];
        currentIndex++;
        clickedLabels.add(index);
      }
    }
  }

  function clickHandler() {
    handleLabelClick(parseInt(this.dataset.index));
  }

  labels.forEach((label, index) => {
    label.dataset.index = index;
    label.addEventListener("click", clickHandler);
  });
});
  
//-----------------------
document.addEventListener("DOMContentLoaded", function() {
  const labels = document.querySelectorAll(".myLabel2");
  const textarea = document.getElementById("myTextArea2");
  let currentIndex = 0;
  const clickedLabels = new Set();

  const initialTexts = [
    "# Import library.\nimport openpyxl\n\n",
    "# Create a new excel file.\nwb = openpyxl.Workbook()\n\n",
    "# Select sheet.\nsheet = wb.active\n\n",
    "# Write data to the file.\nsheet.append(['Case ID', 'Description', 'Status', 'Note'])\n\n",
    "# Customize the results.\ndriver = webdriver.Edge()\ndata = invalidlogin()\nsheet.append(['001', 'Check login', 'Pass' if data == True else 'Fail', '' if data == True else str(data)])\n\n",
    "# Save file.\nwb.save('result.xlsx')"
  ];

  function handleLabelClick(index) {
    if (!clickedLabels.has(index)) {
      if (currentIndex === index) {
        textarea.value += (textarea.value ? "\n" : "") + initialTexts[index];
        currentIndex++;
        clickedLabels.add(index);
      }
    }
  }

  function clickHandler() {
    handleLabelClick(parseInt(this.dataset.index));
  }

  labels.forEach((label, index) => {
    label.dataset.index = index;
    label.addEventListener("click", clickHandler);
  });
});

//-----------------------
const label = document.getElementById('visiblelabel');
const textarea = document.getElementById('myTextArea');
const label1 = document.getElementById('visiblelabel1');
const textarea1 = document.getElementById('myTextArea1');
const label2 = document.getElementById('visiblelabel2');
const textarea2 = document.getElementById('myTextArea2');

label.addEventListener('click', () => {
    if (textarea.style.display === 'none' || textarea.style.display === '') {
        textarea.style.display = 'block';
    } else {
        textarea.style.display = 'none';
    }
});

//--------
label1.addEventListener('click', () => {
  if (textarea1.style.display === 'none' || textarea.style.display === '') {
      textarea1.style.display = 'block';
  } else {
      textarea1.style.display = 'none';
  }
});

//--------
label2.addEventListener('click', () => {
  if (textarea2.style.display === 'none' || textarea.style.display === '') {
      textarea2.style.display = 'block';
  } else {
      textarea2.style.display = 'none';
  }
});