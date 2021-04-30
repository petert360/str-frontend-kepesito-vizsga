function changeOuterLinks() {
  const elements = document.querySelectorAll('nav#link-list a');
  for (let element of elements) {
    if (element.innerHTML.includes('outer-link')) {
      element.setAttribute('target', '_blank');
      element.innerHTML = `<strong>${element.innerHTML}</strong>`;
    }
  }
  /*   const navElement = document.querySelector("nav#link-list");
  navElement.style.backgroundColor = 'red';
  navElement.style.display = 'flex';
  navElement.style.flexDirection = 'column';
  navElement.style.width = '30%';
  navElement.style.margin = '0 auto';
  navElement.style.border = '1px solid blue';
  navElement.style.padding = '16px';
 */
  const styleText = `
    background-color:red;
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
    border: 1px solid blue;
    padding: 16px`;
  document.querySelector('nav#link-list').style.cssText = styleText;
}

export { changeOuterLinks };
