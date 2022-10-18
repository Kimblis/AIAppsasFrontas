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

import TextClusterForm from './TextClusterForm'

const TextClusterModal = ({ setPlace }: { setPlace: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button mx={5} onClick={onOpen}>
        Get cluster by text
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search by text</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <TextClusterForm setPlace={setPlace} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TextClusterModal
