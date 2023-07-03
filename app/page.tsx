import Image from 'next/image'
import styles from './page.module.css'

import DefaultLayout from './layouts/default'

import BreadcumbLayout from './layouts/elements/breadcrumb'
import ContentDemoLayout from './layouts/elements/content_demo'

export default function Home() {
  return (
    <DefaultLayout>
      <BreadcumbLayout />
      <ContentDemoLayout />
    </DefaultLayout>
  )
}
