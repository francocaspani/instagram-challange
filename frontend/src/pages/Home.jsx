import Post from '../components/Post'
import '../stylesheets/home.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import postActions from '../redux/actions/postsActions';

export default function Home() {
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()

  const posts = useSelector(store => store.postsReducer.posts)
  const newPost = useSelector(store => store.postsReducer.newPost)

  useEffect(() => {
    dispatch(postActions.getPosts())
  }, [newPost, reload])

  const onClickReload = () => setReload(!reload)


  return (
    <div className='main-container-home'>
      {posts.map((post, i) => {
        return (
          <Post key={i} post={post} setReload={onClickReload} />
        )
      })}
    </div>
  )
}
