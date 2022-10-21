import BackpackerImage from '@images/profiles/backpacker.svg';
import TouristImage from '@images/profiles/tourist.svg';
import PhotographerImage from '@images/profiles/photographer.svg';
import EconomistImage from '@images/profiles/economist.svg';
import SelfKnowledgeableImage from '@images/profiles/self-knowledgeable.svg';
import SocialImage from '@images/profiles/social.svg';
import classes from './index.module.scss'

interface IProfilePhotoProps {
  profileId: string
}


function ProfilePhoto (props: IProfilePhotoProps) {
  const profileId = Number(props.profileId)
  function getRelatedProfilePhoto() {
    console.log(profileId)
    switch (profileId) {
      case 1: 
        return BackpackerImage
      case 2: 
        return TouristImage
      case 3: 
        return PhotographerImage
      case 4: 
        return EconomistImage
      case 5: 
        return SelfKnowledgeableImage
      case 6: 
        return SocialImage
    
      default:
        break;
    }
  }

  return (
    <img className={classes.image} src={getRelatedProfilePhoto()} alt="aboutphoto" />
  )
}

export default ProfilePhoto