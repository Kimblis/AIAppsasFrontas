import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import PhotoClusterForm from './PhotoClusterForm'

const PhotoClusterModal = ({ setPlace }: { setPlace: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button mx={5} onClick={onOpen}>
        Get cluster by photo
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search photos by title</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <PhotoClusterForm setPlace={setPlace} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PhotoClusterModal
