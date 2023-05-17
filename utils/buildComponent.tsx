import { MainHero } from 'components/MainHero'
import { Quote } from 'components/Quote'
import { FeaturedItems } from 'components/FeaturedItems'
import { MediaModule } from 'components/MediaModule'
import { CtaBanner } from 'components/CtaBanner'
import { FeaturedText } from 'components/FeaturedText'

const componentsMap = {
  MainHero,
  Quote,
  FeaturedItems,
  MediaModule,
  CtaBanner,
  FeaturedText,
}

export const buildComponent = ({ _type, ...props }) => {
  if (!_type) {
    throw new Error('Object does not have a "_type" property')
  }

  const Component = componentsMap[_type]
  if (!Component) {
    throw new Error(`No component is registered for type:'${_type}`)
  }
  return <Component key={props._key} {...props} />
}
