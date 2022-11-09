import { useRouter } from "next/router"

export default function search() {
  const router = useRouter()
  const id = router.query.id
  
  console.log(router)
  
  return (
    <div>
      <h1>routes/{id}/search!</h1>
    </div>
  )
}