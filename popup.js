const selector = document.querySelector("select[name='category']");
const d = document.querySelector("p[id='ddd']");

selector.addEventListener("change", (e) => {
  const selected = e.target.value;

  chrome.tabs.query({ active: true, currentWindow: true}, (tabs => {
    let searchWord = "";
    switch(selected){
      case "synthesis": searchWord = "総合"; break;
      case "sunshine": searchWord = "サンシャイン"; break;
      case "niji": searchWord = "虹ヶ咲"; break;
      case "super-star": searchWord = "スーパースター"; break;
      case "hasu": searchWord = "蓮ノ空"; break;
      case "other": searchWord = "誕"; break;
    }

    chrome.tabs.sendMessage(tabs[0].id, searchWord, (res) => {});
  }))
})
