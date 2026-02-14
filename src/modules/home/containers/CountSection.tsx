import Container from '@/components/shared/Container'
import CountCard from '../components/CountCard'

const CountSection = () => {
  return (
      <div className="bg-white w-full">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <CountCard count={340000} text={"Məmnun Pasiyent"} />
            <CountCard count={100} text={"Professional Xidmət"} />
            <CountCard count={120} text={"İxtisaslaşmış Xidmət"} />
            <CountCard count={15} text={"Peşəkar təcrübə İli"} />
          </div>
        </Container>
      </div>
  )
}

export default CountSection
