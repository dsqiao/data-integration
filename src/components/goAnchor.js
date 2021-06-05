function goAnchor (selector) {
  // 移动距离
  let top = 0
  // 当前滚动条位置
  const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  // 若为指定距离
  if (typeof selector === 'number') {
    top = selector - scrollTop
  } else {
    const anchor = document.querySelector(selector) || { offsetTop: 0 }
    top = anchor.offsetTop - scrollTop - 94
  }
  window.scrollBy({ top, behavior: 'smooth' })
}

export default goAnchor
