"use client"
import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}
const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Número de telefone copiado com sucesso!")
  }
  return (
    <div key={phone} className="flex justify-between">
      {/* Telefone */}
      <div className="flex items-center">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* Whatsapp */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhone(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
