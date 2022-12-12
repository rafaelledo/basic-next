import { useRouter } from "next/router"
import Link from "next/link"

export default function idAndName() {
  const router = useRouter()
  const id = router.query.id
  const name = router.query.name
  
  console.log(router)
  
  return (
    <div>
      <h1>routes/{id}/{name}</h1>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  )
}