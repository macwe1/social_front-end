import styles from './login.module.scss'
import { Icon } from '@components/icon/Icon'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useRef } from 'react'
// import { GlobalContext } from '@components/context/GlobalContext'
import { useRouter } from 'next/router'

// interface CounterProps {
//   user: any
//   update: () => void
//   reset: () => void
// }
export const Login: React.FunctionComponent = () => {
  const passwordEl = useRef(null)
  const logindEl = useRef(null)
  const router = useRouter()
  useEffect(() => {
    window.localStorage.getItem('token') && router.push('/')
  }, [])

  const handleLogin = () => {
    const values = {
      fullName: 'macwel',
      email: 'macwel@gmail.com',
      password: 'S@ndr777',
      ppAccept: true,
      newsLetter: false,
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer fefege...',
    }
    axios
      .post(`http://127.0.0.1:3231/auth/sign-in`, values, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem('token', res.data.token)
          router.push(
            `/users/${
              res.data.user.shortLink == null
                ? res.data.user.id
                : res.data.user.shortLink
            }`
          )
        }
      })
  }

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Login</div>
        <div className={styles.login_block}>
          <div className={styles.login_block_login}>Login</div>
          <div className={styles.login_block_inputGroup}>
            <span>
              <Icon name="user" />
            </span>
            <input ref={logindEl} placeholder="login" />
          </div>
        </div>
        <div className={styles.login_block}>
          <div className={styles.login_block_login}>Login</div>
          <div className={styles.login_block_inputGroup}>
            <span>
              <Icon name="password" />
            </span>
            <input ref={passwordEl} placeholder="password" />
          </div>
        </div>
        <div className={styles.login_actions}>
          <button
            onClick={() => {
              handleLogin()
            }}
          >
            Войти
          </button>
          <Link href="/">Забыли пароль?</Link>
        </div>
      </div>
    </div>
  )
}
