
import { PageHeader } from '../../common/components/PageHeader'
import {  PlusIcon } from 'lucide-react'

export const Dashboard = () => {
  
  return (
    <div className='min-w-full' >
        <PageHeader
        title='Welcome back User'
        description="Here's what's happening with your projects today"
        Icon={PlusIcon}
        buttonText='New Project'
        />
    </div>
  )
}
