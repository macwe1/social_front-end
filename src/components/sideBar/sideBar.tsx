import styles from './sideBar.module.scss'
import Link from 'next/link'
import { Icon } from '@components/icon/Icon'
import { useRouter } from 'next/router'

export const SideBar: React.FunctionComponent = () => {
  const router = useRouter()

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar_logo}>Pixel</div>
      <div className={styles.sideBar_listMenu}>
        <div className={styles.sideBar_listMenu_title}>MENU</div>
        <div className={styles.sideBar_listMenu_content}>
          <div
            className={
              router.asPath === '/'
                ? `${styles.sideBar_listMenu_content_link} &&
                ${styles.sideBar_listMenu_content_link_active}
              `
                : styles.sideBar_listMenu_content_link
            }
          >
            <Icon name="home" />
            <Link href="/">Home</Link>
          </div>
          <div
            className={
              router.asPath === '/news'
                ? `${styles.sideBar_listMenu_content_link} &&
                ${styles.sideBar_listMenu_content_link_active}
              `
                : styles.sideBar_listMenu_content_link
            }
          >
            <Icon name="galary" />
            <Link href="/news">Latest News</Link>
          </div>
          <div
            className={
              router.asPath === '/explore'
                ? `${styles.sideBar_listMenu_content_link} &&
                ${styles.sideBar_listMenu_content_link_active}
              `
                : styles.sideBar_listMenu_content_link
            }
          >
            <Icon name="home" />
            <Link href="/explore">Explore</Link>
          </div>
          <div
            className={
              router.asPath === '/files'
                ? `${styles.sideBar_listMenu_content_link} &&
                ${styles.sideBar_listMenu_content_link_active}
              `
                : styles.sideBar_listMenu_content_link
            }
          >
            <Icon name="galary" />
            <Link href="/files">Files</Link>
          </div>
          <div
            className={
              router.asPath === '/galary'
                ? `${styles.sideBar_listMenu_content_link} &&
                ${styles.sideBar_listMenu_content_link_active}
              `
                : styles.sideBar_listMenu_content_link
            }
          >
            <Icon name="home" />
            <Link href="/galary">Galary</Link>
          </div>
          <div
            className={
              router.asPath === '/events'
                ? `${styles.sideBar_listMenu_content_link} &&
                ${styles.sideBar_listMenu_content_link_active}
              `
                : styles.sideBar_listMenu_content_link
            }
          >
            <Icon name="galary" />
            <Link href="/events">Events</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
