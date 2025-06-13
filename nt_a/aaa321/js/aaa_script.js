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



//   모바일 비율 맞출
  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 1280;
  }

  function setFullHeight() {
    if (!isMobile()) return; // 모바일에서만 적용
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setFullHeight);
  window.addEventListener('load', setFullHeight);





// 페이지 로드시 주소창 감추기
window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 1); // 주소창 감추기
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

      // 이미지 추가
    const titleImg = document.createElement('img');
    titleImg.src = './img/hometitle.gif';
    titleImg.alt = '홈 타이틀';
    titleImg.style.maxWidth = '15%';     // 반응형
    titleImg.style.height = 'auto';      // 비율 유지
    titleImg.style.marginBottom = '0.5%';
    namePrompt.appendChild(titleImg);

      // 텍스트 추가
    const welcomeText = document.createElement('div');
    welcomeText.textContent = '식품구성자전거';
    welcomeText.style.fontSize = 'clamp(10px, 5vh, 36px)'; // 반응형: 화면 너비 기준 폰트 크기 이건 최소 16px, 최대 36px로 제한
    welcomeText.style.color = '#fff';
    welcomeText.style.marginBottom = '1%';
    welcomeText.style.fontWeight = 'bold';
    welcomeText.style.textAlign = 'center';  // 중앙 정렬
    welcomeText.style.maxWidth = '90%';      // 긴 텍스트 대비
    namePrompt.appendChild(welcomeText);

    // 스타일
    welcomeText.style.opacity = '0';
    welcomeText.style.transition = 'opacity 1s ease-in';
    welcomeText.style.fontSize = 'clamp(16px, 5vh, 36px)';
    welcomeText.style.textAlign = 'center';
    welcomeText.style.color = '#fff';
    welcomeText.style.marginBottom = '4%';
    welcomeText.style.fontWeight = 'bold';
    welcomeText.style.maxWidth = '90%';

    // 애니메이션 실행
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
  // container.style.width = '1%';
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
    localStorage.clear();  //이름다시 입력 동작시 전체 내용 불가
    location.reload();
  });

  const resetBtn = document.createElement('img');
  // 하단초기화버튼제거
  // resetBtn.src = '../img/reset_bnt.png';
  // resetBtn.alt = '전체 초기화';
  // resetBtn.title = '전체 초기화';
  // resetBtn.style.position = 'fixed';
  // resetBtn.style.bottom = '20px';
  // resetBtn.style.right = '20px';
  // resetBtn.style.zIndex = '1000';
  // resetBtn.style.cursor = 'pointer';
  // resetBtn.style.width = '70px';
  // resetBtn.style.height = '30px';
  // document.body.appendChild(resetBtn);

  resetBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  // 이름은 초기화되지 않음
  // resetBtn.addEventListener('click', () => {
  //   const userName = localStorage.getItem('userName');
  //   localStorage.clear();
  //   if (userName) {
  //     localStorage.setItem('userName', userName);
  //   }
  //   location.reload();
  // });

  contentList.forEach((table) => {
    const el = document.querySelector(`.${table.id}`);
    if (el) {
        el.innerHTML = table.content;
    }
  });

  // 이전 메모리 읽어드리기
  // buttons.forEach(({ btn, img, src }) => {
  //   const clicked = localStorage.getItem(btn);
  //   const imgEl = document.getElementById(img);
  //   if (clicked === 'true') {
  //     document.getElementById(btn).style.display = 'none';
  //     imgEl.src = src;
  //     imgEl.style.opacity = '1';
  //     clickedCount++;

      // 정답 시 힌트 숨기고 정답 이미지/텍스트 보여주기
  //     const infoImg = document.getElementById(btn.replace('Btn', 'InfoImg'));
  //     const infoText = document.getElementById(btn.replace('Btn', 'InfoText'));
  //     const hintImg = document.getElementById(btn.replace('Btn', 'HintImg'));
  //     const hintText = document.getElementById(btn.replace('Btn', 'HintText'));

  //     if (hintImg) hintImg.style.display = 'none';
  //     if (hintText) hintText.style.display = 'none';
  //     if (infoImg) infoImg.style.display = 'block';
  //     if (infoText) infoText.style.display = 'block';

  //     if (clickedCount === buttons.length) {
  //       const popup = document.getElementById('popup');
  //       popup.style.display = 'flex'; // flex로 보여줘야 가운데 정렬됨
  //       setTimeout(() => {
  //         popup.classList.add('active'); // 부드럽게 회전해서 뜨게!
  //       }, 3000);
  //     }
  //   }
  // });

  

  //드레그 
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

        // 정답 시 힌트 숨기고 정답 이미지/텍스트 보여주기        
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
          popup.style.display = 'flex'; // flex로 보여줘야 가운데 정렬됨
          setTimeout(() => {
            popup.classList.add('active'); // 부드럽게 회전해서 뜨게!
          }, 3000);
        }
      } else {
        showTemporaryMessage('다시 해봐요');
      }
    });

    


    //더블클릭
    btnEl.addEventListener('dblclick', () => {
      document.getElementById(btn).style.display = 'none';
      imgEl.src = src;
      imgEl.style.opacity = '1';
      imgEl.style.transition = 'opacity 0.5s ease-in-out';
      localStorage.setItem(btn, 'true');
      clickedCount++;

      // 정답 시 힌트 숨기고 정답 이미지/텍스트 보여주기        
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
        popup.style.display = 'flex'; // flex로 보여줘야 가운데 정렬됨
        setTimeout(() => {
          popup.classList.add('active'); // 부드럽게 회전해서 뜨게!
        }, 3000);
      }
    });  
  });



  //터치기반
  buttons.forEach(({ btn, img, src }) => {
    const btnEl = document.getElementById(btn);
    const imgEl = document.getElementById(img);
    const container = document.getElementById('gameContainer');

    // 터치 시작 좌표 저장
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
        // 드롭성공
        if (btn === btnEl.id) {
          btnEl.style.display = 'none';
          imgEl.src = src;
          imgEl.style.opacity = '1';
          imgEl.style.transition = 'opacity 0.5s ease-in-out';
          localStorage.setItem(btn, 'true');
          clickedCount++;

          // 정답 시 힌트 숨기고 정답 이미지/텍스트 보여주기        
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
            popup.style.display = 'flex'; // flex로 보여줘야 가운데 정렬됨
            setTimeout(() => {
              popup.classList.add('active'); // 부드럽게 회전해서 뜨게!
            }, 3000);
          }
        } else {
        showTemporaryMessage('다시 해봐요');
          // 필요 시 진동도 가능: navigator.vibrate(200);
        }
      } else {
        // 원래 위치로 복귀 (선택사항항)
        btnEl.style.left = '';
        btnEl.style.top = '';
        btnEl.style.zIndex = '';
      }
    });
  });
});




  




// showTemporaryMessage
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
  requestAnimationFrame(() => msgDiv.style.opacity = '1'); // fade in

  setTimeout(() => {
    msgDiv.style.opacity = '0'; // fade out
    setTimeout(() => document.body.removeChild(msgDiv), 300);
  }, duration);
}




function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('active'); // 회전 애니메이션 제거

  setTimeout(() => {
    popup.style.display = 'none'; // 숨기기

    // localStorage 정리
    const userName = localStorage.getItem('userName'); // 이름은 살리고
    localStorage.clear();
    if (userName) {
      localStorage.setItem('userName', userName); // 다시 저장
    }

    // 새로고침
    location.reload();
  }, 800); // 애니메이션 끝난 뒤 실행 (0.8초 후)
}


//화면 회전 -이렇게 하면 화면이 회전되거나 브라우저 크기가 바뀌어도 버튼들이 원래 위치로 돌아가게 되어 UI가 깨지지 않아요 
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
