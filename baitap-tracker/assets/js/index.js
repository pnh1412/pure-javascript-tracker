// const ISSUES = 'issues';

// // mock data
// let dataIssues = [];

// // components
// const issuesList = document.getElementById("issuesList");
// const btnAdd = document.getElementById("btnAdd");
// const search = document.getElementById("search");
// const orderBy = document.getElementById("orderBy");
// const btnAll = document.getElementById("btnAll");
// const btnOpen = document.getElementById("btnOpen");
// const btnClose = document.getElementById("btnClose");

// // call api fetch data
// fetch('https://tony-auth-express.vercel.app/api/todo', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(res => res.json())
//   .then(data => {
//     getData(data);
//   })


// function getData(dataSource) {
//   const data = window.localStorage.getItem(ISSUES);
//   if (data) {
//     dataIssues = JSON.parse(data);
//     renderIssue(dataIssues);
//   } else {
//     saveDataToLocalStorage(dataSource);
//     renderIssue(dataSource);
//   }
// }


// // click remove => new data => renderIssue(newData)
// function renderIssue(dataSource = []) {
//   console.log("dataSource: ", dataSource);
//   issuesList.innerHTML = "";
//   dataSource.forEach((issue) => {
//     issuesList.innerHTML += `
//       <div class="rounded overflow-hidden shadow-lg mb-4">
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2 flex items-center bg-slate-400	">
//             <div class="mr-2">${issue.title}</div>
//             <span 
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//               ${issue.severity === "open" ? "Open" : "Closed"}
//             </span>
//           </div>
//           <p class="text-gray-700 text-base">
//             ${issue.description}
//           </p>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span 
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               ${issue.author}
//           </span>
//         </div>

//         <div class="text-right px-6 py-4">
//           <button 
//           type="button" 
//           class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
//           onclick="closeIssue('${issue.id}')"
//           >
//           Close
//           </button>
//           <button
//             class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"
//             data-ripple-light="true"
//             onclick="console.log('Issue ID:', '${issue.id}'); deleteIssue('${issue.id}')"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     `;
//   });
//   saveDataToLocalStorage(dataSource);
// }

// function saveDataToLocalStorage(data) {
//   // Lưu dữ liệu vào local storage với key là 'issues'
//   window.localStorage.setItem(ISSUES, JSON.stringify(data));
// }


// // fetch data
// // renderIssue(dataIssues);

// // add new issue
// // btnAdd.addEventListener("click", () => {
// //   const title = document.getElementById("title").value;
// //   const description = document.getElementById("description").value;
// //   const author = document.getElementById("author").value;

// //   const issueItem = {
// //     data:
// //     {
// //       id: Math.ceil(Math.random() * 1000),
// //       title,
// //       description,
// //       author: [author],
// //       severity: "open",
// //     }
// //   };


// //   fetch('https://tony-auth-express.vercel.app/api/todo', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(issueItem)
// //     // body: JSON.stringify({ data: issueItem })
// //   })
// //     .then(res => res.json())
// //     .then(data => {
// //       console.log('Added Issue ID:', data.data.id);
// //       const items = [...dataIssues, data.data]; // push item in array
// //       dataIssues = items;
// //       renderIssue(dataIssues)
// //     })

// // });

// btnAdd.addEventListener("click", () => {
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const author = document.getElementById("author").value;

//   const issueItem = {
//     data: {
//       title,
//       description,
//       author: [author],
//       severity: "open",
//     }
//   };

//   fetch('https://tony-auth-express.vercel.app/api/todo', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(issueItem)
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log('Added Issue ID:', data.data._id);
//       const items = [...dataIssues, data.data];
//       dataIssues = items;
//       renderIssue(dataIssues)
//     })

// });


// // delete issue
// function deleteIssue(issueId) {
//   const clonedIssues = [...dataIssues];
//   fetch(`https://tony-auth-express.vercel.app/api/todo/${issueId}`, {
//     method: 'DELETE'
//   })
//     .then(() => {
//       const issuesFiltered = clonedIssues.filter(issue => issue._id !== issueId);
//       dataIssues = issuesFiltered;
//       renderIssue(dataIssues);
//     })
// }

// const btnSearch = document.getElementById("btnSearch");
// btnSearch.addEventListener("click", () => {
//   const searchInput = document.getElementById("searchInput").value;
//   const searchResults = searchByDescription(searchInput);
//   renderIssue(searchResults);
// });

// function searchByDescription(description) {
//   // Chuyển đổi mô tả và từ khóa tìm kiếm về chữ thường để tìm kiếm không phân biệt chữ hoa chữ thường
//   const searchTerm = description.toLowerCase();

//   // Kiểm tra xem có từ khóa tìm kiếm không
//   if (!searchTerm) {
//     // Nếu không có từ khóa, trả về tất cả các vấn đề
//     return dataIssues;
//   }

//   // Sử dụng filter để lọc các vấn đề có mô tả chứa từ khóa tìm kiếm
//   const searchResults = dataIssues.filter((issue) =>
//     issue.description.toLowerCase().includes(searchTerm)
//   );

//   // Trả về kết quả tìm kiếm
//   return searchResults;
// }

// function closeIssue(issueId) {
//   const clonedIssues = [...dataIssues];
//   const index = clonedIssues.findIndex((issue) => issue.id === Number(issueId));

//   if (index !== -1) {
//     clonedIssues[index].severity = "closed";
//     dataIssues = clonedIssues;
//     renderIssue(dataIssues);
//   }
// }

// btnAll.addEventListener("click", () => {
//   renderFilteredIssues("all");
// });

// // Thêm event listener cho nút "Open"
// btnOpen.addEventListener("click", () => {
//   renderFilteredIssues("open");
// });

// // Thêm event listener cho nút "Close"
// btnClose.addEventListener("click", () => {
//   renderFilteredIssues("closed");
// });

// function renderFilteredIssues(severity) {
//   const clonedIssues = [...dataIssues];

//   // Lọc dữ liệu dựa trên trạng thái
//   const filteredIssues = severity === "all"
//     ? clonedIssues
//     : clonedIssues.filter(issue => issue.severity === severity);

//   // Render lại danh sách
//   renderIssue(filteredIssues);
// }

// document.getElementById("orderBy").addEventListener("change", () => {
//   const orderBy = document.getElementById("orderBy").value;
//   sortIssuesByTitle(orderBy);
// });

// function sortIssuesByTitle(orderBy) {
//   const clonedIssues = [...dataIssues];

//   // Sắp xếp mảng theo title
//   clonedIssues.sort((a, b) => {
//     const titleA = a.title.toLowerCase();
//     const titleB = b.title.toLowerCase();

//     if (orderBy === "asc") {
//       return titleA.localeCompare(titleB);
//     } else if (orderBy === "desc") {
//       return titleB.localeCompare(titleA);
//     }

//     return 0;
//   });

//   // Render lại danh sách
//   renderIssue(clonedIssues);
// }

// function logOut() {
//   window.location.href = "./login.html";

// }


const ISSUES = 'issues';

// mock data
let dataIssues = [];

// components
const issuesList = document.getElementById("issuesList");
const btnAdd = document.getElementById("btnAdd");
const btnSearch = document.getElementById("btnSearch");
const btnAll = document.getElementById("btnAll");
const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");

// call api fetch data
fetch('https://tony-auth-express.vercel.app/api/todo', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    getData(data);
  })

function getData(dataSource) {
  const data = window.localStorage.getItem(ISSUES);
  if (data) {
    dataIssues = JSON.parse(data);
    renderIssue(dataIssues);
  } else {
    saveDataToLocalStorage(dataSource);
    renderIssue(dataSource);
  }
}

function renderIssue(dataSource = []) {
  issuesList.innerHTML = "";
  dataSource.forEach((issue) => {
    issuesList.innerHTML += `
      <div class="rounded overflow-hidden shadow-lg mb-4">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 flex items-center bg-slate-400	">
            <div class="mr-2">${issue.title}</div>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              ${issue.severity === "open" ? "Open" : "Closed"}
            </span>
          </div>
          <p class="text-gray-700 text-base">
            ${issue.description}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${issue.author}
          </span>
        </div>
  
        <div class="text-right px-6 py-4">
          <button 
            type="button" 
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            onclick="closeIssue('${issue._id}')"
          >
            Close
          </button>
          <button
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onclick="console.log('Issue ID:', '${issue._id}'); deleteIssue('${issue._id}')"
          >
            Delete
          </button>
        </div>
      </div>
    `;
  });
  saveDataToLocalStorage(dataSource);
}

function saveDataToLocalStorage(data) {
  window.localStorage.setItem(ISSUES, JSON.stringify(data));
}

btnAdd.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const author = document.getElementById("author").value;

  const issueItem = {
    data: {
      title,
      description,
      author: [author],
      severity: "open",
    }
  };

  fetch('https://tony-auth-express.vercel.app/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(issueItem)
  })
    .then(res => res.json())
    .then(data => {
      console.log('Added Issue ID:', data.data._id);
      const items = [...dataIssues, data.data];
      dataIssues = items;
      renderIssue(dataIssues)
    })
});

function deleteIssue(issueId) {
  const clonedIssues = [...dataIssues];
  fetch(`https://tony-auth-express.vercel.app/api/todo/${issueId}`, {
    method: 'DELETE'
  })
    .then(() => {
      const issuesFiltered = clonedIssues.filter(issue => issue._id !== issueId);
      dataIssues = issuesFiltered;
      renderIssue(dataIssues);
    })
}

btnSearch.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput").value;
  const searchResults = searchByDescription(searchInput);
  renderIssue(searchResults);
});

function searchByDescription(description) {
  const searchTerm = description.toLowerCase();

  if (!searchTerm) {
    return dataIssues;
  }

  const searchResults = dataIssues.filter((issue) =>
    issue.description.toLowerCase().includes(searchTerm)
  );

  return searchResults;
}

function closeIssue(issueId) {
  const clonedIssues = [...dataIssues];
  const index = clonedIssues.findIndex((issue) => issue._id === issueId);

  if (index !== -1) {
    clonedIssues[index].severity = "closed";
    fetch(`https://tony-auth-express.vercel.app/api/todo/${issueId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(() => {
        dataIssues = clonedIssues;
        renderIssue(dataIssues);
      })
  }
}

btnAll.addEventListener("click", () => {
  renderFilteredIssues("all");
});

btnOpen.addEventListener("click", () => {
  renderFilteredIssues("open");
});

btnClose.addEventListener("click", () => {
  renderFilteredIssues("closed");
});

function renderFilteredIssues(severity) {
  const clonedIssues = [...dataIssues];

  const filteredIssues = severity === "all"
    ? clonedIssues
    : clonedIssues.filter(issue => issue.severity === severity);

  renderIssue(filteredIssues);
}

document.getElementById("orderBy").addEventListener("change", () => {
  const orderBy = document.getElementById("orderBy").value;
  sortIssuesByTitle(orderBy);
});

function sortIssuesByTitle(orderBy) {
  const clonedIssues = [...dataIssues];

  clonedIssues.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (orderBy === "asc") {
      return titleA.localeCompare(titleB);
    } else if (orderBy === "desc") {
      return titleB.localeCompare(titleA);
    }

    return 0;
  });

  renderIssue(clonedIssues);
}

function logOut() {
  window.location.href = "./login.html";
}
