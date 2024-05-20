import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Trashicon from '@/imgsrc/Trash-icon';

export default function App() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
    <Button onPress={onOpen} isIconOnly ><Trashicon /></Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">채팅방 삭제</ModalHeader>
                  <ModalBody>
                    <p> 
                      이 채팅방을 삭제하시겠어요?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      취소
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      확인
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          </div>
  );
}
