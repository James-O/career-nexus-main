import React from 'react'
import { Outlet } from 'react-router-dom'
import { Help, Home, Jobs, Mentorship, RightArrow, Toggle, User } from '../../icons/icon';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
} from '@chakra-ui/react'
import { useRef } from 'react';

const Navigate = () => {
    const Toggler = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = useRef()

        return (
            <div className=''>
                <Button ref={btnRef} colorScheme='whiteAlpha' onClick={onOpen}>
                    <Toggle />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <img src="/images/c-nicon2.png" alt="career-nexus logo" className='h-16 w-auto'/>
                        </DrawerHeader>
                        <hr />
                        <DrawerBody>
                            <div className='flex mb-3 mt-2' >
                                <input value={'Home'} disabled className='border p-2 bg-gray-50 dark:bg-gray-50 w-full rounded' />
                                <div className='ml-[-2rem] flex items-center'>
                                    <RightArrow />
                                </div>
                            </div>
                            <div className='flex mb-3'>
                                <input value={'Mentorship'} disabled className='border p-2 bg-gray-50 dark:bg-gray-50 w-full rounded' />
                                <div className='ml-[-2rem] flex items-center'>
                                    <RightArrow />
                                </div>
                            </div>
                            <div className='flex mb-3'>
                                <input value={'Network'} disabled className='border p-2 bg-gray-50 dark:bg-gray-50 w-full rounded' />
                                <div className='ml-[-2rem] flex items-center'>
                                    <RightArrow />
                                </div>
                            </div>
                            <div className='flex mb-3'>
                                <input value={'Job'} disabled className='border p-2 bg-gray-50 dark:bg-gray-50 w-full rounded' />
                                <div className='ml-[-2rem] flex items-center'>
                                    <RightArrow />
                                </div>
                            </div>
                            <div className='flex mb-3'>
                                <input value={'Mailbox'} disabled className='border p-2 bg-gray-50 dark:bg-gray-50 w-full rounded' />
                                <div className='ml-[-2rem] flex items-center'>
                                    <RightArrow />
                                </div>
                            </div>
                            <div className='flex mb-3'>
                                <input value={'Notification'} disabled className='border p-2 bg-gray-50 dark:bg-gray-50 w-full rounded' />
                                <div className='ml-[-2rem] flex items-center'>
                                    <RightArrow />
                                </div>
                            </div>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        )
    }
    return (
        <nav>
            <div className='bg-white shadow flex items-center justify-between'>
                {/* <div className='flex items-center justify-between sticky top-0 z-50 bg-white shadow'> */}
                <div className='ml-10 md:ml-20 pb-2 items-center hidden md:block '>
                    <img src="images/cnlogonew.png" alt="Career-Nexus logo" className="h-16 w-auto" />
                </div>
                <div className='ml-10 md:ml-20 pb-2 items-center block md:hidden'>
                    <img src="images/c-nicon2.png" alt="Career-Nexus logo" className="h-16 w-auto" />
                </div>
                <div className='visible md:invisible ml-auto'>
                    <Toggler />
                </div>
                <div className='gap-10 ml-auto hidden md:flex space-x-4 mr-10'>
                    {/* <div className='flex gap-10 ml-auto invisible md:visible'> */}
                    <div>
                        <div className='ml-2'><Home /></div>
                        <h1>Home</h1>
                    </div>
                    <div >
                        <div className='ml-5'><Mentorship /></div>
                        <h1>Mentorship</h1>
                    </div>
                    <div>
                        <div className='ml-5'><Jobs /></div>
                        <h1>Jobs & Biz</h1>
                    </div>
                    <div>
                        <div className='ml-2'><User /></div>
                        <h1>About</h1>
                    </div>
                    <div>
                        <div className='ml-8'><Help /></div>
                        <h1>Help & Support</h1>
                    </div>

                </div>

            </div>
            <Outlet />
        </nav>
    )
}

export default Navigate
