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

import CategoricalClusterForm from './CategoricalClusterForm'

const CategoricalClusterModal = ({ setPlace }: { setPlace: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button mx={5} onClick={onOpen}>
        Get categorical cluster
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search similar places by qwikidata id</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <CategoricalClusterForm setPlace={setPlace} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CategoricalClusterModal
