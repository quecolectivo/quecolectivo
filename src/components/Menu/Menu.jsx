import React from 'react'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Wallpaper from '../../assets/images/wallpaper.png'

const Menu = ({ open, handle }) => (
  <my-menu>
    <Drawer
      docked={false}
      width={320}
      open={open}
      onRequestChange={(open) => handle(open)}>
      <my-user style={{
        width: 320,
        height: 180,
        display: 'block',
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }} />
      <List>
        <ListItem primaryText='Inbox' leftIcon={<ContentInbox />} />
        <ListItem primaryText='Starred' leftIcon={<ActionGrade />} />
        <ListItem primaryText='Sent mail' leftIcon={<ContentSend />} />
        <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
        <ListItem primaryText='Inbox' leftIcon={<ContentInbox />} />
      </List>
      <Divider />
      <List>
        <ListItem primaryText='All mail' rightIcon={<ActionInfo />} />
        <ListItem primaryText='Trash' rightIcon={<ActionInfo />} />
        <ListItem primaryText='Spam' rightIcon={<ActionInfo />} />
        <ListItem primaryText='Follow up' rightIcon={<ActionInfo />} />
      </List>
    </Drawer>
  </my-menu>
)

export default Menu
