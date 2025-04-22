import React from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import ChatList from '../../components/ChatList'
import ChatView from '../../components/ChatView'
import ActivityBar from './ActivityBar'

const Dashboard = () => {
  return (
    <div className='h-full w-full flex'>
      <ActivityBar />

      <PanelGroup direction="horizontal" className="h-full flex-1">
        <Panel defaultSize={25} minSize={20} maxSize={40}>
          <ChatList />
        </Panel>

        <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-blue-500 transition-colors" />

        <Panel defaultSize={75}>
          <ChatView />
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default Dashboard