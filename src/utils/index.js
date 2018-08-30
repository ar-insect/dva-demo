
export function getPlainNode(nodeList, parentPath = '') {
  const arr = []
  nodeList.forEach(node => {
    node.path = `${parentPath}/${node.path || ''}`.replace(/\/+/g, '/')
    node.exact = true
    if (node.children && !node.component) {
      arr.push(...getPlainNode(node.children, node.path))
    } else {
      if (node.children && node.component) {
        node.exact = false
      }
      arr.push(node)
    }
  })
  return arr
}
