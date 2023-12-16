// CONSTANTS
const ISSUES = 'issues';

// mock data
let dataIssues = [];

// components
const issuesList = document.getElementById("issuesList");
const btnAdd = document.getElementById("btnAdd");
const search = document.getElementById("search");
const orderBy = document.getElementById("orderBy");
const btnAll = document.getElementById("btnAll");
const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");

function getData() {
  const data = window.localStorage.getItem(ISSUES);
  const dataParsed = data ? JSON.parse(data) : [];
  dataIssues = dataParsed;
  renderIssue(dataIssues);
}

getData();

// click remove => new data => renderIssue(newData)
function renderIssue(dataSource = []) {
  issuesList.innerHTML = '';

  dataSource.forEach(issue => {
    issuesList.innerHTML += `
      <div class="rounded overflow-hidden shadow-lg mb-4">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 flex items-center">
            <div class="mr-2">${issue.title}</div>
            <span 
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              ${issue.status === 'open' ? 'Open' : 'Closed'}
            </span>
          </div>
          <p class="text-gray-700 text-base">
            ${issue.description}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span 
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ${issue.author}
          </span>
        </div>
  
        <div class="text-right px-6 py-4">
          <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Close</button>
          <button
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onclick="deleteIssue('${issue.id}')"
          >
            Delete
          </button>
        </div>
      </div>
    `
  }) 
}

// // fetch data
// renderIssue(dataIssues);

// add new issue
btnAdd.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const author = document.getElementById("author").value;
  
  const issueItem = {
    id: Math.ceil(Math.random() * 1000),
    title,
    description,
    author,
    status: "open",
  }
  
  dataIssues.push(issueItem);
  renderIssue(dataIssues);
});

// delete issue
function deleteIssue(issueId) {
  const clonedIssues = [...dataIssues];
  // const index = clonedIssues.findIndex(issue => issue.id === issueId);
  // clonedIssues.splice(index, 1);
  const issuesFiltered = clonedIssues.filter(issue => issue.id !== Number(issueId));

  dataIssues = issuesFiltered;
  renderIssue(dataIssues)
}

// search issue
search.addEventListener('keyup', e => {
  const clonedTodo = [...dataIssues];
  const filteredTodo = clonedTodo.filter(todo => todo.title.toLowerCase().includes(e.target.value.toLowerCase()));
  renderIssue(filteredTodo)
})


function sortIssuesByTitle(value) {
  const clonedIssues = [...dataIssues];

  // Sắp xếp mảng theo title
  clonedIssues.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (value === "asc") {
      return titleA.localeCompare(titleB);
    } else if (value === "desc") {
      return titleB.localeCompare(titleA);
    }

    return 0;
  });

  // Render lại danh sách
  renderIssue(clonedIssues);
}


orderBy.addEventListener("change", () => {
  const value = orderBy.value;
  sortIssuesByTitle(value);
});

function renderFilteredIssues(status) {
  const clonedIssues = [...dataIssues];

  // Lọc dữ liệu dựa trên trạng thái
  const filteredIssues = status === "all"
    ? clonedIssues
    : clonedIssues.filter(issue => issue.status === status);

  // Render lại danh sách
  renderIssue(filteredIssues);
}

btnAll.addEventListener("click", () => {
  renderFilteredIssues("all");
});

// Thêm event listener cho nút "Open"
btnOpen.addEventListener("click", () => {
  renderFilteredIssues("open");
});

// Thêm event listener cho nút "Close"
btnClose.addEventListener("click", () => {
  renderFilteredIssues("closed");
});