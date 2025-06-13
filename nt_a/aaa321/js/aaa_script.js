const buttons = [
  { btn: 'aaa01Btn', img: 'aaa01Img', src: './img/aaa01_effect.png' },
  { btn: 'aaa02Btn', img: 'aaa02Img', src: './img/aaa02_effect.png' },
  { btn: 'aaa03Btn', img: 'aaa03Img', src: './img/aaa03_effect.png' },
  { btn: 'aaa04Btn', img: 'aaa04Img', src: './img/aaa04_effect.png' },
  { btn: 'aaa05Btn', img: 'aaa05Img', src: './img/aaa05_effect.png' },
  { btn: 'aaa06Btn', img: 'aaa06Img', src: './img/aaa06_effect.png' },
  { btn: 'aaa07Btn', img: 'aaa07Img', src: './img/aaa07_effect.png' },
  { btn: 'aaa08Btn', img: 'aaa08Img', src: './img/aaa08_effect.png' },
  { btn: 'aaa09Btn', img: 'aaa09Img', src: './img/aaa09_effect.png' },
  { btn: 'aaa10Btn', img: 'aaa10Img', src: './img/aaa10_effect.png' },
  { btn: 'aaa11Btn', img: 'aaa11Img', src: './img/aaa11_effect.png' },
  { btn: 'aaa12Btn', img: 'aaa12Img', src: './img/aaa12_effect.png' }
];

let clickedCount = 0;

  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 1280;
  }

  function setFullHeight() {
    if (!isMobile()) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setFullHeight);
  window.addEventListener('load', setFullHeight);


window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 1);
  }, 0);
});





window.addEventListener('DOMContentLoaded', () => {
  const showNamePrompt = () => {
    const namePrompt = document.createElement('div');
    namePrompt.style.position = 'fixed';
    namePrompt.style.top = '0';
    namePrompt.style.left = '0';
    namePrompt.style.width = '100%';
    namePrompt.style.height = '100%';
    namePrompt.style.background = 'rgba(0,0,0,0.7)';
    namePrompt.style.display = 'flex';
    namePrompt.style.flexDirection = 'column';
    namePrompt.style.justifyContent = 'center';
    namePrompt.style.alignItems = 'center';
    namePrompt.style.zIndex = '2000';


    const titleImg = document.createElement('img');
    titleImg.src = './img/hometitle.gif';
    titleImg.alt = '홈 타이틀';
    titleImg.style.maxWidth = '15%'; 
    titleImg.style.height = 'auto';  
    titleImg.style.marginBottom = '0.5%';
    namePrompt.appendChild(titleImg);

      
    const welcomeText = document.createElement('div');
    welcomeText.textContent = '식품구성자전거';
    welcomeText.style.fontSize = 'clamp(10px, 5vh, 36px)'; 
    welcomeText.style.color = '#fff';
    welcomeText.style.marginBottom = '1%';
    welcomeText.style.fontWeight = 'bold';
    welcomeText.style.textAlign = 'center'; 
    welcomeText.style.maxWidth = '90%';     
    namePrompt.appendChild(welcomeText);

    
    welcomeText.style.opacity = '0';
    welcomeText.style.transition = 'opacity 1s ease-in';
    welcomeText.style.fontSize = 'clamp(16px, 5vh, 36px)';
    welcomeText.style.textAlign = 'center';
    welcomeText.style.color = '#fff';
    welcomeText.style.marginBottom = '4%';
    welcomeText.style.fontWeight = 'bold';
    welcomeText.style.maxWidth = '90%';

    
    setTimeout(() => {
      welcomeText.style.opacity = '1';
    }, 100);


    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '이름을 입력하세요';
    input.style.padding = '1%';
    input.style.fontSize = 'clamp(10px, 2.4vh, 16px)';
    input.style.marginBottom = '1%';

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = '확인';
    confirmBtn.style.padding = '0.5% 1.2%';
    confirmBtn.style.fontSize = 'clamp(11px, 4vh, 16px)';
    confirmBtn.style.cursor = 'pointer';

    confirmBtn.addEventListener('click', () => {
      const name = input.value.trim();
      localStorage.setItem('userName', name);
      nameDisplay.textContent = name ? `${name} 님 환영합니다!` : '환영합니다!';
      nameDisplay.style.fontSize = 'clamp(10px, 3vh, 16px)';
      document.body.removeChild(namePrompt);
      resetBtn.style.display = 'block';
      changeNameBtn.style.display = 'inline-block';
    });

  namePrompt.appendChild(input);
  namePrompt.appendChild(confirmBtn);
  document.body.appendChild(namePrompt);
  };

  const userName = localStorage.getItem('userName');

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '1%';
  container.style.right = '2%';
  container.style.zIndex = '1000';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '10px';
    document.body.appendChild(container);

  const nameDisplay = document.createElement('div');
  nameDisplay.id = 'nameDisplay';
  nameDisplay.style.fontSize = 'clamp(10px, 3vh, 16px)';
  nameDisplay.style.fontWeight = 'bold';
  nameDisplay.style.color = '#000';
  container.appendChild(nameDisplay);

  const changeNameBtn = document.createElement('button');
  changeNameBtn.textContent = '초기화';
  changeNameBtn.style.fontSize = 'clamp(10px, 3vh, 16px)';
  changeNameBtn.style.padding = '0 3vh';
  changeNameBtn.style.cursor = 'pointer';
  container.appendChild(changeNameBtn);

  if (!userName || userName.trim() === '') {
    showNamePrompt();
    changeNameBtn.style.display = 'none';
  } else {
    nameDisplay.textContent = userName ? `${userName} 님 환영합니다!` : '환영합니다!';
    nameDisplay.style.fontSize = 'clamp(10px, 3vh, 16px)';
  }

  changeNameBtn.addEventListener('click', () => {
    localStorage.removeItem('userName');
    localStorage.clear(); 
    location.reload();
  });

  const resetBtn = document.createElement('img');
  

  resetBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  
  contentList.forEach((table) => {
    const el = document.querySelector(`.${table.id}`);
    if (el) {
        el.innerHTML = table.content;
    }
  });

  
  buttons.forEach(({ btn, img, src }) => {
    const btnEl = document.getElementById(btn);
    const imgEl = document.getElementById(img);
  
    btnEl.setAttribute('draggable', 'true');
  
    btnEl.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', btn);
    });
  
    imgEl.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  
    imgEl.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedBtnId = e.dataTransfer.getData('text/plain');
  
      if (draggedBtnId === btn) {
        document.getElementById(draggedBtnId).style.display = 'none';
        imgEl.src = src;
        imgEl.style.opacity = '1';
        localStorage.setItem(draggedBtnId, 'true');
        clickedCount++;

        
        const infoImg = document.getElementById(btn.replace('Btn', 'InfoImg'));
        const infoText = document.getElementById(btn.replace('Btn', 'InfoText'));
        const hintImg = document.getElementById(btn.replace('Btn', 'HintImg'));
        const hintText = document.getElementById(btn.replace('Btn', 'HintText'));
  
        if (hintImg) hintImg.style.display = 'none';
        if (hintText) hintText.style.display = 'none';
        if (infoImg) infoImg.style.display = 'block';
        if (infoText) infoText.style.display = 'block';

        if (clickedCount === buttons.length) {
          const popup = document.getElementById('popup');
          popup.style.display = 'flex'; 
          setTimeout(() => {
            popup.classList.add('active');
          }, 3000);
        }
      } else {
        showTemporaryMessage('다시 해봐요');
      }
    });

    



    btnEl.addEventListener('dblclick', () => {
      document.getElementById(btn).style.display = 'none';
      imgEl.src = src;
      imgEl.style.opacity = '1';
      imgEl.style.transition = 'opacity 0.5s ease-in-out';
      localStorage.setItem(btn, 'true');
      clickedCount++;


      const infoImg = document.getElementById(btn.replace('Btn', 'InfoImg'));
      const infoText = document.getElementById(btn.replace('Btn', 'InfoText'));
      const hintImg = document.getElementById(btn.replace('Btn', 'HintImg'));
      const hintText = document.getElementById(btn.replace('Btn', 'HintText'));
  
      if (hintImg) hintImg.style.display = 'none';
      if (hintText) hintText.style.display = 'none';
      if (infoImg) infoImg.style.display = 'block';
      if (infoText) infoText.style.display = 'block';      

      if (clickedCount === buttons.length) {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
        setTimeout(() => {
          popup.classList.add('active');
        }, 3000);
      }
    });  
  });


  buttons.forEach(({ btn, img, src }) => {
    const btnEl = document.getElementById(btn);
    const imgEl = document.getElementById(img);
    const container = document.getElementById('gameContainer');


    let touchOffsetX = 0;
    let touchOffsetY = 0;

    btnEl.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      const rect = btnEl.getBoundingClientRect();
      touchOffsetX = touch.clientX - rect.left;
      touchOffsetY = touch.clientY - rect.top;
    });

    btnEl.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const containerRect = container.getBoundingClientRect();
  
      const x = touch.clientX - containerRect.left - touchOffsetX;
      const y = touch.clientY - containerRect.top - touchOffsetY;
  
      btnEl.style.position = 'absolute';
      btnEl.style.left = `${x}px`;
      btnEl.style.top = `${y}px`;
      btnEl.style.zIndex = '1500';
    });

    btnEl.addEventListener('touchend', (e) => {
      const btnRect = btnEl.getBoundingClientRect();
      const imgRect = imgEl.getBoundingClientRect();

      const isOverlapping = !(
        btnRect.right < imgRect.left ||
        btnRect.left > imgRect.right ||
        btnRect.bottom < imgRect.top ||
        btnRect.top > imgRect.bottom
      );

      if (isOverlapping) {

        if (btn === btnEl.id) {
          btnEl.style.display = 'none';
          imgEl.src = src;
          imgEl.style.opacity = '1';
          imgEl.style.transition = 'opacity 0.5s ease-in-out';
          localStorage.setItem(btn, 'true');
          clickedCount++;


          const infoImg = document.getElementById(btn.replace('Btn', 'InfoImg'));
          const infoText = document.getElementById(btn.replace('Btn', 'InfoText'));
          const hintImg = document.getElementById(btn.replace('Btn', 'HintImg'));
          const hintText = document.getElementById(btn.replace('Btn', 'HintText'));
    
          if (hintImg) hintImg.style.display = 'none';
          if (hintText) hintText.style.display = 'none';
          if (infoImg) infoImg.style.display = 'block';
          if (infoText) infoText.style.display = 'block';

          if (clickedCount === buttons.length) {
            const popup = document.getElementById('popup');
            popup.style.display = 'flex';
            setTimeout(() => {
              popup.classList.add('active');
            }, 3000);
          }
        } else {
        showTemporaryMessage('다시 해봐요');
        }
      } else {
        btnEl.style.left = '';
        btnEl.style.top = '';
        btnEl.style.zIndex = '';
      }
    });
  });
});




  





function showTemporaryMessage(message, duration = 1500) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = message;
  Object.assign(msgDiv.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '3% 4%',
    borderRadius: '12px',
    fontSize: 'clamp(12px, 2vh, 24px)',
    zIndex: '3000',
    opacity: '0',
    transition: 'opacity 0.3s ease'
  });

  document.body.appendChild(msgDiv);
  requestAnimationFrame(() => msgDiv.style.opacity = '1');

  setTimeout(() => {
    msgDiv.style.opacity = '0';
    setTimeout(() => document.body.removeChild(msgDiv), 300);
  }, duration);
}




function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('active');

  setTimeout(() => {
    popup.style.display = 'none'; 


    const userName = localStorage.getItem('userName');
    localStorage.clear();
    if (userName) {
      localStorage.setItem('userName', userName);
    }

    
    location.reload();
  }, 800);
}



const initialPositions = {};


window.addEventListener('DOMContentLoaded', () => {
  buttons.forEach(({ btn }) => {
    const el = document.getElementById(btn);
    initialPositions[btn] = {
      left: el.style.left,
      top: el.style.top,
    };
  });
});

window.addEventListener('resize', resetButtonPositions);
window.addEventListener('orientationchange', resetButtonPositions);

function resetButtonPositions() {
  buttons.forEach(({ btn }) => {
    const el = document.getElementById(btn);
    if (el.style.display !== 'none') {
      el.style.left = initialPositions[btn].left;
      el.style.top = initialPositions[btn].top;
    }
  });
}
