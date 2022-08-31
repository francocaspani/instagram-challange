import React from 'react'
import { useState} from 'react'
import '../stylesheets/post.css'
import { useDispatch } from "react-redux"
import postActions from '../redux/actions/postsActions'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import ModalModifyPost from './ModalModifyPost'

export default function Post({ post, setReload }) {
    const [open, setOpen] = React.useState(false);
    const [showFullText, setShowFullText] = useState(false)
    const [liked, setLiked] = useState(false)

    const img = ["jpg", "gif", "png", "jpeg"]
    // const vid = ["mp4", "3gp", "ogg", "mov"]
    const url = new URL(post.image)
    const extension = url.pathname.split(".")[1]
    const text = post.text
    const textToShow = text.slice(0, 50)
    const dispatch = useDispatch()
    let likes = post.likes

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLike = async () => {
        setLiked(!liked)
        if (!liked) {
            likes += 1
        } else {
            likes -= 1
        }
        const postData = {
            likes: likes
        }
        const res = await dispatch(postActions.modifyPost(post._id, postData))
        console.log(res)
        setReload()
    }

    return (
        <div className='card-post'>
            <div className='header-card-container'>
                <header className='header-card'>
                    <div className='avatar-container-card'><img alt="profile pic" className='avatar' crossOrigin="anonymous" draggable="false" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxIOEBAODw8PEBAPEhAODQ8NEQ8PFREWFhURFRMYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQQBAwIH/8QANRABAAEBBAcHAwIHAQAAAAAAAAECAwQRIQUSMUFRYXEigZGhscHRMjPhQvBScoKSorLxI//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB52ttTTtmI5b/AAB6Cfa6Qn9MYc5z8mWu2qq21TPfl4AszJihALwhRMxsmY6S9aLzXGyqe+cfUFgYLG/7q474+G6J3g6AAAAAAAAAAAAAAAAAADBpC3/RH9XwDl5vu6j+74YpkAAAAAAAGuwvurTFOrjhv1sN/RkAb40jxo/yx9myztIqjWjZKI1XC21atWdlXlO4FMAAAAAAAAAAAAAAAHKpwjHhGKJXVjMzO2ZxVr5OFnV0w8ZwSAAAAAAAAAAAAAWbCvWpirjHnvejLo2rsYcKp9pagAAAAAAAAAAAAAAZ7/8AbnrHqlKmkPtz1j1SwAAAAAAAAAAAAb9FzlVHOJ9fhuT9GTnV0hQAAAAAAAAAAAAAABnv8f8AnPWPVKWbejWpmnjHnuRgAAAAAAAAAAAAbNGfVV0j1UWLRlOVU8ZiPD/raAAAAAAAAAAAAAAD4tbSKYxmcISrzMTXM05xOfy2aT+mP5vZOABwHQAAAAAB3049z5B12iiapwjOZccBbsbPUpinh5y+2e41TNnGO7GGgAAAAAAAAAAAAAAGbSFONGPCYn290tbtKNaJp4xMIkwA+f35PpwAAByPy6AfgAHPnB397gAMR2inGYjfMxHiCtcqcLOnnn4zi93IjDLhk6AAAAAAAAAAAAAAAk36jVrnnnHft88VYBCHpeacK6o5zPdObzAAAAAAAAAe9yoxtI5Zz3PGiMZiOMxC4AAAAAAAAAAAAAAAAAADDpKyyiuN2U9NzAt104xMTsmMEWqnCZidsTgDgAAAAAAANWj7LGrW3U+qm8bpZ6tERvnOesvYAAAAAAAAAAAAAAAAAABKv9OFpPOIn29lVM0jPb6Ux7gygAAAAAERjkPqy+qOseoLYAAAAAAAAAAAAAAAAAAACPeqsa6p54eGXsoXm9RRGETjVw4dUoAAAAAAAicM+AAuROMYxsnN1Pud7iI1atm6eHKVCJAAAAAAAAAAAAAAAGa2vtNOztTy2eLBbXiqvbOXCMoBvtr7TTlHanls8WK1vddW/COFOXm8AAAAAAAAAAAB92VtVT9MzHLbHg+AG6z0h/FT30/DVZXiirZMY8JylHcBeEeyvNdOycY4TnDbY3+mcquzPHbANY5E45xnHJ0AAAAAGG9X3Ds0bd9XwD3vF6poy21cI9062vFVe2cuEZQ8gAAAAAAAAAAAAAAAAAAAAHpY21VGye7dPc3WF+pnKrsz5fhNAXRJu15mjnTw+FWiqJiJjZOYOgA+bX6Z6T6IboAAAAAAAAAAAAAAAAAAAAAAAAAq3D7dPf8A7SANAAP/2Q==" /></div>
                    <div className='username-contariner'>
                        <span className='username'>username</span>
                    </div>
                </header>
                <div onClick={handleOpen} className='button-header-card'>
                    <svg aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
            </div>
            <div className="image-container">
                {img.includes(extension) ?
                    <img
                        onDoubleClick={handleLike}
                        className="img-card"
                        src={post.image}
                        alt="post"
                    />
                    :
                    <video
                        className="img-card"
                        controls
                        src={post.image} />
                }

                {liked ? <div className="instagram-heart"></div> : <></>}
            </div>
            <div>
                <div className='icons-card-container'>
                    <div className='icons-1'>
                        <span className='like-icon' onClick={handleLike}>{liked ? <svg aria-label="Unlike" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> : <svg aria-label="Like" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>}</span>

                        <span className='like-icon'><svg aria-label="Comment" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
                        <span className='like-icon'><svg aria-label="Share Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></span>
                    </div>

                    <span className='like-icon'><svg aria-label="Save" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></span>

                </div>
                <div className='text-container'>
                    <span className='text'>Le gusta a {likes} {likes === 1 ? 'persona' : 'personas'}</span>
                </div>
                <div className='text-container'>

                    <span className='username-text'>
                        username
                    </span>
                    <span>&nbsp;</span>
                    {text.length > 50 ?
                        <span className='text'>{showFullText ? text : <>{textToShow}...&nbsp;<span className='more-post' onClick={() => { setShowFullText(true) }}>more</span></>}</span>
                        :
                        <span>{text}</span>
                    }

                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Box>
                        <ModalModifyPost post={post} open={open} handleClose={handleClose} setReload={setReload} />
                    </Box>

                </Modal>

            </div>
        </div>
    )
}
