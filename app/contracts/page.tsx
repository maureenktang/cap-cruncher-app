import { createClient } from "@/lib/supabase/client"

export default async function Page() {
  const supabase = await createClient()
  const { data: contracts } = await supabase.from('contracts').select()
console.log(contracts)
  return <pre>{JSON.stringify(contracts, null, 2)}</pre>
}