"use client"

import React, { Dispatch, SetStateAction } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Trashicon from '@/imgsrc/Trash-icon';
import DataResource from "@/app/DataResource";
import { useRouter } from "next/navigation";

export default function App({ id, stateCallback }: {
  id: string,
  stateCallback: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router = useRouter();
  const deleteRoom = async (closer: () => void) => {
    closer();
    const result = await DataResource.Room.deleteRoom(id);
    if (!result.success) router.push("/login");

    else stateCallback(result.data);
  }
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
                  이 데이터를 삭제하시겠어요?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  취소
                </Button>
                <Button color="primary" onPress={() => deleteRoom(onClose)}>
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
