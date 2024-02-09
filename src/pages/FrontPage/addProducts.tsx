import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddProduct = () => {
  return (
    <div className="" >
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Name</Label>
      <Input type="name" id="name" placeholder="Name" />
      <Label htmlFor="prise">prise</Label>
      <Input type="prise" id="prise" placeholder="Prise" />
      <Label htmlFor="quntity">quentity</Label>
      <Input type="quntity" id="quntity" placeholder="Quentity" />
      <Label htmlFor="description">description</Label>
      <Input type="description" id="description" placeholder="Description" />
    </div>
    </div>
  )
}

export default AddProduct