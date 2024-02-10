for (let k = 0; k <= searchItem.length; k++) {
  for (let j = 0; j <= itemElement.length; j++) {
    if (itemElement[j].includes(searchItem[k])) {
      itemResult.push(item[i]);
      setResultElement(true);

      console.log(itemResult);

      // if (!itemResult.includes(item[i])) {
      //   console.log(itemResult);
      //   setResultElement(true);
      //   itemResult.push(item[i]);
      // }
    } else if (searchWord == item[i]) {
      setResultElement(true);
      itemResult.push(item[i]);
    } else {
      setResultElement(true);
      setItemResult([]);
    }
    break;
  }
}
