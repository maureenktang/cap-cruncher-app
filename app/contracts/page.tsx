import { createClient } from "@/lib/supabase/client"

export default async function Page() {
  const supabase = await createClient()
  const { data: contracts } = await supabase.from('contracts').select()
  return <pre>{JSON.stringify(contracts, null, 2)}</pre>
}