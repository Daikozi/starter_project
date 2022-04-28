import { RefObject, useEffect, useLayoutEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize'

export const usePosition = (
  groupRef: RefObject<HTMLDivElement>,
  listboxRef: RefObject<HTMLUListElement>,
  inputValue: string,
  listMountPoint: HTMLElement = document.body
) => {
  const size = useWindowSize()
  const [listStyle, setListStyle] = useState({})
  const [offsetTop, setOffsetTop] = useState(
    groupRef.current?.getBoundingClientRect().height ?? 0
  )

  const { left: groupLeft, top: groupTop } =
    listMountPoint?.getBoundingClientRect()

  useEffect(() => {
    const handleOffsetTop = () => {
      const inputBottom = groupRef.current?.getBoundingClientRect().bottom ?? 0
      const inputHight = groupRef.current?.getBoundingClientRect().height ?? 0
      const bottomClearance = window.innerHeight - inputBottom ?? 0
      const topClearance = groupRef.current?.getBoundingClientRect().y ?? 0
      const listHeight = listboxRef.current?.getBoundingClientRect().height ?? 0

      if (bottomClearance >= listHeight || topClearance < listHeight) {
        setOffsetTop(inputHight)
      } else {
        setOffsetTop(-listHeight)
      }
    }
    window.addEventListener('scroll', handleOffsetTop)
    handleOffsetTop()

    return () => {
      window.removeEventListener('scroll', handleOffsetTop)
    }
  }, [groupRef, listboxRef, inputValue, size])

  useLayoutEffect(() => {
    if (listboxRef.current) {
      const {
        left = 0,
        top = 0,
        width = 10,
      } = groupRef.current?.getBoundingClientRect() || {}

      const calculatedTop = top

      setListStyle({
        minWidth: width,
        left: left - groupLeft ?? 0,
        top: calculatedTop + offsetTop - groupTop,
      })
    }
  }, [
    groupLeft,
    groupTop,
    groupRef,
    listboxRef,
    offsetTop,
    inputValue,
    size,
    listMountPoint,
  ])
  return { listStyle }
}
