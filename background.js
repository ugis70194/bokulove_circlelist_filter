// ポップアップからのメッセージを受け取るためのリスナー登録
chrome.runtime.onMessage.addListener((searchWord, _ev, callback) => {
  const All_tr = document.querySelectorAll("tr");

  for(const tr of All_tr){
    tr.style.display = null;
  }

  if(searchWord === ""){
    callback("run");
    return true;
  }

  let count = 1;
  for(const tr of All_tr){
    if(count === 1 || count === 2 || count === 3){
      count++;
      continue;
    }

    const chilrdren = tr.querySelectorAll("td");

    let isTarget = false;
    for(const child of chilrdren){
      if(child.textContent.includes(searchWord)){
        console.log(child.textContent);
        isTarget = true;
      }
    }
    if(!isTarget){
      tr.style.display = 'none';
    }
  }
  callback("run");
  return true;
});
