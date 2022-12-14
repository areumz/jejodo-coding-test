// fetch로 items 불러오기
const loadItems = () => {
  return fetch("data/data.json").then((response) => response.json());
};

// items 보여주기
const displayItems = (items) => {
  const container = document.querySelector(".user-list-cont");
  container.innerHTML = items.map((item) => createList(item)).join("");
};

// li 만들기
const createList = (item) => {
  return `
              <li class="user-list">
            <img src="${item.profile}" alt="profile" class="user-profile">
            <div class="user-list-content">
                <div class="user-list-main">
                    <span class="user-name">${item.nickname}</span>
                    <div class="user-apart">지구家 아파트 <span>${item.building_count}</span>개</div>
                </div>
                <div class="user-list-id">
                    <div class="id-je">
                        <img src="./assets/je-icon.png" alt="je-icon">
                        <span class="id-je-txt">${item.nickname}</span>
                    </div>
                    <div class="id-o">
                        <img src="./assets/o-icon.png" alt="o-icon">
                        <span class="id-o-txt">${item.oname}</span>
                    </div>
                </div>
            </div>
          </li>
    `;
};

// 검색 기능
function searchUser(items) {
  let searchWord = document.getElementById("search-bar-id").value.toLowerCase();
  let userName = document.querySelectorAll(".user-name");
  let res = items.filter((item) => {
    if (item.nickname.toLowerCase().includes(searchWord)) {
      return item;
    }
  });
  document.getElementById("user-list-cont").style.display = "none";
  const containerSearch = document.getElementById("user-list-cont-search");
  containerSearch.innerHTML = res
    .map((item) => {
      let item0 = item.nickname.split(searchWord)[0];
      let item1 = item.nickname.split(searchWord)[1];
      return `
              <li class="user-list">
            <img src="${item.profile}" alt="profile" class="user-profile">
            <div class="user-list-content">
                <div class="user-list-main">
                    <span class="user-name">${item0}<span class="correct">${searchWord}</span>${item1}</span>
                    <div class="user-apart">지구家 아파트 <span>${item.building_count}</span>개</div>
                </div>
                <div class="user-list-id">
                    <div class="id-je">
                        <img src="./assets/je-icon.png" alt="je-icon">
                        <span class="id-je-txt">${item.nickname}</span>
                    </div>
                    <div class="id-o">
                        <img src="./assets/o-icon.png" alt="o-icon">
                        <span class="id-o-txt">${item.oname}</span>
                    </div>
                </div>
            </div>
          </li>
    `;
    })
    .join("");
}

// 검색 함수를 핸들링하는 함수
function handleEvent(items) {
  let searchBtn = document.getElementById("search-btn-id");
  let autoCont = document.querySelector(".autocomplete-cont");
  searchBtn.addEventListener("click", () => {
    autoCont.style.display = "none";
    searchUser(items);
  });
}

// 전체 사용자 숫자 계산
function sumUsers(items) {
  let userNum = document.querySelector(".user-num");
  userNum.innerText = items.length;
}

// 필터링 버튼 핸들링하는 함수
function handleFilterBtn() {
  let filterBtn = document.querySelector(".filter-btn");
  filterBtn.addEventListener("click", () => {
    filterBtn.style.backgroundImage = "url(/assets/filter-icon-active.png)";
    document.querySelector(".user-title").style.padding = "0.8rem 0 0 0.3rem";
    document.querySelector(".user-title").innerText = "화섬 아파트 NFT";
    document.querySelector(".user-num").innerText = "";
    document.querySelector(".user-apart-filter").style.display = "flex";
  });
}
handleFilterBtn();

// 숫자 필터링 버튼 핸들링하는 함수
function handleNumBtn(items) {
  let entireBtn = document.getElementsByClassName("user-apart-btn entire");
  let fiveBtn = document.getElementsByClassName("user-apart-btn five");
  let fourBtn = document.getElementsByClassName("user-apart-btn four");
  let threeBtn = document.getElementsByClassName("user-apart-btn three");
  let twoBtn = document.getElementsByClassName("user-apart-btn two");
  let oneBtn = document.getElementsByClassName("user-apart-btn one");

  entireBtn[0].addEventListener("click", () => {
    entireBtn[0].classList.add("active");
    fiveBtn[0].classList.remove("active");
    fourBtn[0].classList.remove("active");
    threeBtn[0].classList.remove("active");
    twoBtn[0].classList.remove("active");
    oneBtn[0].classList.remove("active");
    let res = items.filter((item) => {
      return item;
    });
    document.getElementById("user-list-cont").style.display = "none";
    const containerSearch = document.getElementById("user-list-cont-search");
    containerSearch.innerHTML = res
      .map((resitem) => createList(resitem))
      .join("");
  });

  fiveBtn[0].addEventListener("click", () => {
    fiveBtn[0].classList.add("active");
    entireBtn[0].classList.remove("active");
    fourBtn[0].classList.remove("active");
    threeBtn[0].classList.remove("active");
    twoBtn[0].classList.remove("active");
    oneBtn[0].classList.remove("active");
    let res = items.filter((item) => {
      if (item.building_count > 5) {
        return item;
      }
    });
    document.getElementById("user-list-cont").style.display = "none";
    const containerSearch = document.getElementById("user-list-cont-search");
    containerSearch.innerHTML = res
      .map((resitem) => createList(resitem))
      .join("");
  });

  fourBtn[0].addEventListener("click", () => {
    fourBtn[0].classList.add("active");
    entireBtn[0].classList.remove("active");
    fiveBtn[0].classList.remove("active");
    threeBtn[0].classList.remove("active");
    twoBtn[0].classList.remove("active");
    oneBtn[0].classList.remove("active");
    let res = items.filter((item) => {
      if (item.building_count == 4) {
        return item;
      }
    });
    document.getElementById("user-list-cont").style.display = "none";
    const containerSearch = document.getElementById("user-list-cont-search");
    containerSearch.innerHTML = res
      .map((resitem) => createList(resitem))
      .join("");
  });

  threeBtn[0].addEventListener("click", () => {
    threeBtn[0].classList.add("active");
    entireBtn[0].classList.remove("active");
    fiveBtn[0].classList.remove("active");
    fourBtn[0].classList.remove("active");
    twoBtn[0].classList.remove("active");
    oneBtn[0].classList.remove("active");
    let res = items.filter((item) => {
      if (item.building_count == 3) {
        return item;
      }
    });
    document.getElementById("user-list-cont").style.display = "none";
    const containerSearch = document.getElementById("user-list-cont-search");
    containerSearch.innerHTML = res
      .map((resitem) => createList(resitem))
      .join("");
  });

  twoBtn[0].addEventListener("click", () => {
    twoBtn[0].classList.add("active");
    entireBtn[0].classList.remove("active");
    fiveBtn[0].classList.remove("active");
    fourBtn[0].classList.remove("active");
    threeBtn[0].classList.remove("active");
    oneBtn[0].classList.remove("active");
    let res = items.filter((item) => {
      if (item.building_count == 2) {
        return item;
      }
    });
    document.getElementById("user-list-cont").style.display = "none";
    const containerSearch = document.getElementById("user-list-cont-search");
    containerSearch.innerHTML = res
      .map((resitem) => createList(resitem))
      .join("");
  });

  oneBtn[0].addEventListener("click", () => {
    oneBtn[0].classList.add("active");
    entireBtn[0].classList.remove("active");
    fiveBtn[0].classList.remove("active");
    fourBtn[0].classList.remove("active");
    threeBtn[0].classList.remove("active");
    twoBtn[0].classList.remove("active");

    let res = items.filter((item) => {
      if (item.building_count == 1) {
        return item;
      }
    });
    document.getElementById("user-list-cont").style.display = "none";
    const containerSearch = document.getElementById("user-list-cont-search");
    containerSearch.innerHTML = res
      .map((resitem) => createList(resitem))
      .join("");
  });
}

// 자동완성 핸들링하는 함수
function handleAutoComplete(items) {
  let ul = document.querySelector(".autocomplete-box");
  let container = document.querySelector(".autocomplete-cont");
  let searchCont = document.querySelector(".search-cont");
  let searchInput = document.querySelector(".search-bar");
  searchInput.addEventListener("keyup", () => {
    container.style.display = "block";
    let res = items.filter((item) => {
      if (item.nickname.toLowerCase().includes(searchInput.value)) {
        return item;
      }
    });

    ul.innerHTML = res.map((item) => createHTML(item)).join("");

    function createHTML(item) {
      return `<li class="autocomplete-content">${item.nickname}</li>`;
    }
  });
}

// 추가로 페이지네이션 기능 해보는중

// let thispage = 1;

// function page(num) {
//   let items = [];
//   const start = num * 8 - 8;
//   const end = num * 8;
//   fetch("data/data.json")
//     .then((response) => response.json())
//     .then((item) => {
//       for (let i = 0; i < item.length; i++) {
//         items.push(item[i]);
//       }
//     });
//   console.log(items);
//   return items.slice(start, end);
// }

// function renderCard(pageNum) {
//   const selectedDatas = page(pageNum);
//   selectedDatas.forEach((data) => {
//     displayItems(data);
//   });
// }

// function renderInitPage() {
//   const selectedDatas = page(1);
//   const theMostPrev = document.getElementsByClassName(
//     "pagination-btn the-most"
//   );
//   selectedDatas.forEach((data) => {
//     displayItems(data);
//   });
//   theMostPrev.addEventListener("click", () => renderCard(1));
// }
// renderInitPage();

loadItems()
  .then((items) => {
    displayItems(items);
    handleEvent(items);
    sumUsers(items);
    handleNumBtn(items);
    handleAutoComplete(items);
  })
  .catch(console.log);
