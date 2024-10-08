import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6 text-center">
          <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">CBM Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
