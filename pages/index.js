import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout
      title="Home | Next.js"
      description="Esta es la descripción del home"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>Your Self Introduction</p>
        <p>
          This is a sample website - you be building a site like this on here
          <a href="http://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}
