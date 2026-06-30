import Container from '@/components/shared/Container'
import CountCard from '../components/CountCard'

const CountSection = () => {
  return (
      <div className="bg-white w-full">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full">
            <CountCard count={341285} text={"Məmnun Pasiyent"}        className="border-t border-l border-primary/12" />
            <CountCard count={100}    text={"Professional Xidmət"}    className="border-t border-l border-primary/12" />
            <CountCard count={120}    text={"İxtisaslaşmış Xidmət"}   className="border-t border-l border-primary/12" />
            <CountCard count={7}      text={"Peşəkar təcrübə İli"}    className="border-t border-l border-r border-primary/12" />
          </div>
        </Container>
      </div>
  )
}

export default CountSection
