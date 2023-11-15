import CommunityForm from "@components/CommunityForm/CommunityForm"
import Section from "@components/ui/Section/Section"
import Logo from '@assets/images/Logo.png';
import Camera from '@assets/images/camara_icon.svg';
const INITIDATA = {
  communityTitle: '텀블러를 사랑하는 모임',
  communityContent: '텀블러를 이용해용',
  categoryType: '온라인 캠페인',
  communityMaxParticipant: 10,
  communityLocation: '온라인',
  file: [],
};

const INIT_EDIT_IMAGE = [Logo, Camera]

const CommunityEditPage = () => {
	return (
    <Section sectionTitle="커뮤니티 수정">
			<CommunityForm initialData={INITIDATA} initialImageURLs={INIT_EDIT_IMAGE }  />
    </Section>
  );
}

export default CommunityEditPage