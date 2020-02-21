import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const elementRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // console.log(elementRef.current)
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
      console.log(entries)
      console.log({ isIntersecting })
    })
    observer.observe(elementRef.current)
  }, [elementRef])

  return (
    <Article ref={elementRef}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />

            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />{likes}likes!
          </Button>
        </>
      }

    </Article>
  )
}
