enum ContentID {
  AddServer = "Add Server",
  Explore = "Explore",
  Home = "Home"
}

enum CustomContentID {
  GamingServer = "gaming-server",
  PizzaLoversServer = "pizza-lovers-server",
  LinksServer = "links-server"
}

enum NavbarItemType {
  Custom = "Custom",
  Default = "Default",
  Home = "Home"
}

enum UserStatus {
  Away = "Away",
  Busy = "Busy",
  Offline = "Offline",
  Online = "Online"
}

enum TooltipDirection {
  Right = "Right",
  Top = "Top"
}

interface IUser {
  activity?: string;
  id: string;
  image: string;
  status: UserStatus;
  username: string;
}

interface ICustomNavbarItem {
  contentID: string;
  image: string;
  label: string;
}

interface ITooltipProps {
  direction?: TooltipDirection;
  text: string;
}

// Create a container element
const container = document.createElement("div");
container.classList.add("popup-container");

// Create a popup element
const popup = document.createElement("div");
popup.classList.add("popup");

// Add content to the popup
const header = document.createElement("h2");
header.textContent = "Welcome to my website!";
popup.appendChild(header);

const message = document.createElement("p");
message.textContent = "We're glad you're here. Please take a moment to read these important instructions before continuing; 1) You can click the server icons on the side to view sections of the website, 2) pls no ddos federnat1";
popup.appendChild(message);

const closeButton = document.createElement("button");
closeButton.textContent = "Thanks!";
closeButton.addEventListener("click", () => {
  container.remove();
});
popup.appendChild(closeButton);

// Add the popup to the container
container.appendChild(popup);

// Add the container to the document
document.body.appendChild(container);

const Tooltip: React.FC<ITooltipProps> = (props: ITooltipProps) => {
  const direction: TooltipDirection = props.direction || TooltipDirection.Right;
  
  return (
    <div className={classNames("tooltip", direction.toLowerCase())}>
      <p>{props.text}</p>
    </div>
  );
}

const ActiveContent: React.FC = () => {
  const { state } = React.useContext(AppContext);

  const getContentIcon = (): string => {
    switch(state.activeContentID) {
      case ContentID.Home:
        return "fa-brands fa-discord";
      case ContentID.AddServer:
        return "fa-solid fa-plus";
      case ContentID.Explore:
        return "";
      case CustomContentID.GamingServer:
        return "";
      case CustomContentID.PizzaLoversServer:
        return "";
      case CustomContentID.LinksServer:
        return "";
      default:
        return "";
    }
  }

  const showButton =
    state.activeContentID === CustomContentID.GamingServer ||
    state.activeContentID === CustomContentID.PizzaLoversServer ||
    state.activeContentID === CustomContentID.LinksServer;

  return (
    <div id="active-content">
      <i key={state.activeContentID} className={getContentIcon()} />
      {state.activeContentID === CustomContentID.PizzaLoversServer && (
        <a>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '50px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' }}>
              <h1>
                <img src="https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024" alt="Link Icon" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </h1>
            </div>
            <div style={{ marginLeft: '10px' }}>
              <span><b>сифия </b></span>
              <span style={{ fontSize: '12px' }}>Today at 12:00</span>
            </div>
          </div>
          <div style={{ marginLeft: '110px' }}>
            <span>hi there!</span>
            <br />
            <span>my name is syphia and i travel and make videos sometimes (the last part is a lie i never make videos)</span>
            <br />
            <span>i am 15 (as of now) and am from europe (if you want more details please check the discord server</span>
            <br />
            <span>if you are new to the website there is stuff at the left (servers) which you can click on and see stuff that ive done (very little)</span>
            <br />
            <span>this website was difficult to make and i think it turned out well so be kind and subscribe if you haven't</span>
            <br />
            <span>i use she/her pronous (yes womar skeri)</span>
            <br />
            <span>thats kinda it hope you like the website</span>
          </div>
        </a>
      )}
      {state.activeContentID === CustomContentID.GamingServer && (
        <a>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '50px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' }}>
              <h1>
                <img src="https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024" alt="Link Icon" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </h1>
            </div>
            <div style={{ marginLeft: '10px' }}>
              <span><b>сифия </b></span>
              <span style={{ fontSize: '12px' }}>Today at 12:00</span>
            </div>
          </div>
          <div style={{ marginLeft: '110px' }}>
            <span>my game i made and is half-good (pretty self explanatory)</span>
            <br />
            <br />
            <button class="projectButton"><a href="https://mousemover.syphia.repl.co/">aaaaaaaaaaaaaaa</a></button>
            <br />
            <br />
            <span>some cool stuff coming soon perchance (most likely a lie)</span>
          </div>
        </a>
      )}
      {state.activeContentID === CustomContentID.LinksServer && (
        <a>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '50px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' }}>
              <h1>
                <img src="https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024" alt="Link Icon" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </h1>
            </div>
            <div style={{ marginLeft: '10px' }}>
              <span><b>сифия </b></span>
              <span style={{ fontSize: '12px' }}>Today at 12:00</span>
            </div>
          </div>
          <div style={{ marginLeft: '110px' }}>
            <span>youtube: <a href="https://www.youtube.com/@syphia/featured">https://www.youtube.com/@syphia/featured</a></span>
            <br />
            <span>discord: <a href="https://discord.gg/SvugUdNxxK">https://discord.gg/SvugUdNxxK</a></span>
            <br />
            <span>spotify: <a href="https://open.spotify.com/user/31ulwdc3tcyolpnyft7qequvhip4">https://open.spotify.com/user/31ulwdc3tcyolpnyft7qequvhip4</a></span>
            <br />
            <span>twitch: <a href="https://www.twitch.tv/syphialive">https://www.twitch.tv/syphialive</a></span>
            <br />
            <span>github: <a href="https://github.com/Syphiareal">https://github.com/Syphiareal</a></span>
            <br />
            <span>replit: <a href="https://replit.com/@syphia">https://replit.com/@syphia</a></span>
          </div>
        </a>
      )}
      {showButton && (
       <button className="messagebox" disabled>
         You do not have permission to speak here
       </button>
      )}
      {state.activeContentID === ContentID.Explore && (
        <iframe
          src="https://discord.com/widget?id=1023276793052024852&theme=dark"
          width="100%"
          height="100%"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      )}
    </div>
  );
}

interface IUserStatusIconProps {
  status: UserStatus;
}

const UserStatusIcon: React.FC<IUserStatusIconProps> = (props: IUserStatusIconProps) => {
  const getIcon = (): string => {
    switch(props.status) {
      case UserStatus.Away:
        return "fa-solid fa-moon";
      case UserStatus.Busy:
        return "fa-solid fa-do-not-enter";
      case UserStatus.Offline:
        return "fa-solid fa-circle-dot";
      case UserStatus.Online:
        return "fa-solid fa-circle";
    }
  }
  
  return (
    <div className={classNames("user-status-icon", props.status.toLowerCase())}>
      <i className={getIcon()} />
    </div>                    
  );
}

interface IUserIconProps {
  user: IUser;
}

const UserIcon: React.FC<IUserIconProps> = (props: IUserIconProps) => {
  const { user } = props;
  
  const styles: React.CSSProperties = {
    backgroundImage: `url(${user.image})`
  }
  
  return (
    <div className="user-icon" style={styles}>
      <UserStatusIcon status={user.status} />
    </div>
  );
}

interface ICurrentUserControlMenuButtonProps {
  desc?: string;
  icon?: string;  
  label: string;
  status?: UserStatus;
}

const CurrentUserControlMenuButton: React.FC<ICurrentUserControlMenuButtonProps> = (props: ICurrentUserControlMenuButtonProps) => {
  const getIcon = (): JSX.Element => {
    if(props.icon) {
      return (
        <i className={props.icon} />
      );
    } else if (props.status) {
      return (      
        <UserStatusIcon status={props.status} />
      ) ;
    }
  }
  
  const getDesc = (): JSX.Element => {
    if(props.desc) {
      return (
        <p className="current-user-control-menu-button-desc">{props.desc}</p>
      );
    }
  }
  
  return (
    <button className="current-user-control-menu-button" type="button">
      <div className="current-user-control-menu-button-icon">
        {getIcon()}
      </div>
      <div className="current-user-control-menu-button-content">
        <p className="current-user-control-menu-button-label">{props.label}</p>
        {getDesc()}
      </div>
    </button>
  );
}

const CurrentUserControlMenu: React.FC = () => {
  return (
    <div id="current-user-control-menu">
      <div className="current-user-control-menu-section">
        <CurrentUserControlMenuButton 
          label="Online"
          status={UserStatus.Online}
        />
      </div>
      <div className="current-user-control-menu-section">
        <CurrentUserControlMenuButton 
          label="Idle"
          status={UserStatus.Away}
        />
        <CurrentUserControlMenuButton 
          desc="You will not receive any desktop notifications."
          label="Do Not Disturb"
          status={UserStatus.Busy}
        />
        <CurrentUserControlMenuButton 
          desc="You will not appear online, but will have full access to all of Discord."
          label="Invisible"
          status={UserStatus.Offline}
        />
      </div>
      <div className="current-user-control-menu-section">
        <CurrentUserControlMenuButton 
          icon="fa-regular fa-face-grin"
          label="Set a custom status"
        />
      </div>
      <div className="current-user-control-menu-section">
        <CurrentUserControlMenuButton 
          icon="fa-solid fa-arrows-repeat"
          label="Switch Accounts"
        />
      </div>          
    </div>
  );
}

interface ICurrentUserControlButtonProps {
  icon: string;  
  tooltip: string;
}

const CurrentUserControlButton: React.FC<ICurrentUserControlButtonProps> = (props: ICurrentUserControlButtonProps) => {
  return (
    <button className="current-user-control-button">
      <i className={props.icon} />
      <Tooltip direction={TooltipDirection.Top} text={props.tooltip} />
    </button>
  );
}

const CurrentUserControl: React.FC = () => {
  const { user } = React.useContext(AppContext);
  
  const [menuToggled, toggleMenu] = React.useState<boolean>(true);
  
  const handleOnClick = (): void => {
    toggleMenu(!menuToggled);
  }
  
  const getMenu = (): JSX.Element => {
    if(menuToggled) {
      return (
        <CurrentUserControlMenu />
      );
    }
  }
  
  return (
    <div id="current-user-control">
      <div id="current-user">
        <button id="current-user-menu-button" type="button" onClick={handleOnClick}>
          <UserIcon user={user} />
        </button>
        <div id="current-user-details">
          <label id="current-user-username">{user.username}</label>
          <label id="current-user-id">#{user.id}</label>
        </div>
        <div id="current-user-control-buttons">
          <CurrentUserControlButton icon="fa-solid fa-microphone" tooltip="Mute" />
          <CurrentUserControlButton icon="fa-solid fa-headphones" tooltip="Deafen" />
          <CurrentUserControlButton icon="fa-solid fa-gear" tooltip="User Settings" />
        </div>
      </div>
      {getMenu()}
    </div>
  );
}

const DirectMessages: React.FC = () => {
  const getItems = (): JSX.Element[] => {
    const users: IUser[] = [{      
      id: "9803",
      image: "https://cdn.discordapp.com/avatars/475726340277141504/a885652787371d2c6224d2a01cbedfb3.png?size=1024",
      status: UserStatus.Away,
      username: "Totò Sabbia"
    }, {      
      activity: "Playing Lunar Client",
      id: "4058",
      image: "https://cdn.discordapp.com/avatars/619238863436644353/533a9a40ec9e2fef3ec0498644b2f244.png?size=1024",
      status: UserStatus.Busy,
      username: "NizhnyBall"
    }, {      
      id: "6356",
      image: "https://cdn.discordapp.com/avatars/925379629584375818/e24322c4462cefbcdb69f208b7d7ed78.png?size=1024",
      status: UserStatus.Online,
      username: "lucas"
    }, {      
      id: "4705",
      image: "https://cdn.discordapp.com/avatars/1030132326832816221/fe0112e1778ffccdf41cfbf445386eb6.png?size=1024",
      status: UserStatus.Offline,
      username: "midou"
    }, {      
      id: "2552",
      image: "https://i.ibb.co/6wXCYK1/dfc155898d0eddec523d8361577218a0.png",
      status: UserStatus.Away,
      username: "oreo!!!"
    }, {      
      id: "5459",
      image: "https://cdn.discordapp.com/avatars/928694903377104978/2ed246ced9f37db76977d75e77a3adb5.png?size=1024",
      status: UserStatus.Busy,
      username: "N1narr"
    }, {  
      activity: "Playing Grand Theft Auto V",
      id: "2036",
      image: "https://i.ibb.co/6RYGgHC/4cb88a39e0d72b9f6a03819172afa5b3.png",
      status: UserStatus.Busy,
      username: "kittenheart5"
    }];
    
    
    return users.map((user: IUser) => {
      const getActivity = (): JSX.Element => {
        if(user.activity) {
          return (
            <p className="direct-messages-item-user-activity">{user.activity}</p>
          );
        }
      }
      
      return (
        <div className="direct-messages-item content-navigator-button" key={user.id}>
          <UserIcon user={user} />
          <div className="direct-messages-item-user-info">
            <p className="direct-messages-item-username">{user.username}</p>                     
            {getActivity()}
          </div>
          <button className="direct-messages-item-close-button" type="button">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      )
    });
  }
  return (
    <div id="direct-messages">
      <div id="direct-messages-header">
        <h3 id="direct-messages-title">Direct Messages</h3>
        <button id="direct-messages-add-button" type="button">
          <i className="fa-solid fa-plus" />
          <Tooltip direction={TooltipDirection.Top} text="Create DM" />
        </button>
      </div>    
      <div id="direct-messages-items">
        {getItems()}
      </div>
    </div>
  );
}

interface IContentNavigatorButtonProps {
  children: any;
}

const ContentNavigatorButton: React.FC<IContentNavigatorButtonProps> = (props: IContentNavigatorButtonProps) => {
  return (
    <button className="content-navigator-button" type="button">
      {props.children}
    </button>
  );
}

const ContentNavigator: React.FC = () => {
  return (
    <div id="content-navigator">      
      <button id="content-navigator-search-bar-toggle" type="button">Find or start a conversation</button>
      <CurrentUserControl />
      <div className="content-navigator-section"> 
        <ContentNavigatorButton>
          <i className="fa-solid fa-person-drowning" />
          <p>Friends</p>
        </ContentNavigatorButton>
        <ContentNavigatorButton>
          <i className="fa-solid fa-fire" />
          <p>Nitro</p>
        </ContentNavigatorButton>
        <DirectMessages />   
      </div>
    </div>
  );
}

interface INavbarItemProps {  
  color?: string;
  contentID: ContentID | string;
  icon?: string;  
  image?: string;
  label: string;
  type: NavbarItemType;
}

const NavbarItem: React.FC<INavbarItemProps> = (props: INavbarItemProps) => {
  const { state, selectContentID } = React.useContext(AppContext);
  
  const handleOnClick = (): void => {
    selectContentID(props.contentID);
  }
  
  const getContent = (): JSX.Element => {
    if(props.icon) {
      const getStyles = (): React.CSSProperties => {
        const styles: React.CSSProperties = {};
      
        if(props.color) {
          styles.color = `rgb(${props.color})`;
        }
          
        return styles;
      }
      
      return (
        <i className={props.icon} style={getStyles()} />
      );
    } else if (props.image) {
      const styles: React.CSSProperties = {
        backgroundImage: `url(${props.image})`  
      }
      
      return (
        <div className="navbar-item-image" style={styles} />
      );
    }
  }
  
  const getClasses = (): string => {
    return classNames("navbar-item", props.type.toLowerCase(), {
      active: props.contentID === state.activeContentID
    });
  }
  
  return(
    <button type="button" className={getClasses()} onClick={handleOnClick}>    
      <div className="navbar-item-content">
        {getContent()}
      </div>
      <Tooltip text={props.label} />
    </button>    
  )
}

const Navbar: React.FC = () => {
  const getCustomItems = (): JSX.Element[] => {
    const items: ICustomNavbarItem[] = [{
      contentID: CustomContentID.PizzaLoversServer,
      image: "https://i.ibb.co/c6R708T/sunset.jpg",
      label: "About me"
    }, {
      contentID: CustomContentID.GamingServer,
      image: "https://i.ibb.co/ZYDXYMT/bridge.jpg",
      label: "Projects"
    }, {
      contentID: CustomContentID.LinksServer,
      image: "https://i.ibb.co/6scXHsL/sky.jpg",
      label: "Links"
    }];
    
    return items.map((item: ICustomNavbarItem) => (
      <NavbarItem
        key={item.contentID}
        contentID={item.contentID}
        image={item.image}                     
        label={item.label}                     
        type={NavbarItemType.Custom}
      />
    ));
  }
  
  return(
    <div id="navbar-wrapper">
      <div id="navbar">
        <div className="navbar-section">
          <NavbarItem           
            contentID={ContentID.Home}
            icon="fa-brands fa-discord" 
            label="Home" 
            type={NavbarItemType.Home} 
          />
        </div>
        <div className="navbar-section">
          {getCustomItems()}
          <NavbarItem 
            contentID={ContentID.AddServer}
            icon="fa-solid fa-plus" 
            label="Add a Server" 
            type={NavbarItemType.Default}
          />
          <NavbarItem 
            contentID={ContentID.Explore}
            icon="fa-solid fa-compass" 
            label="Join my server" 
            type={NavbarItemType.Default}
          />
        </div>
      </div>
    </div>
  )
}

interface IDiscordAppState {
  activeContentID: ContentID | string;
  user: IUser;
}

interface IDiscordAppContext {
  state: IDiscordAppState;
  user: IUser;
  setStateTo: (state: IDiscordAppState) => void;
  selectContentID: (id: ContentID) => void;
}

const AppContext = React.createContext<IDiscordAppContext>(null);

const Discord: React.FC = () => {
  const [state, setStateTo] = React.useState<IDiscordAppState>({
    activeContentID: ContentID.Home,
    user: {
      id: "0001",
      image: "https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024",
      status: UserStatus.Busy,
      username: "сифия"
    }
  });
  
  const selectContentID = (contentID: ContentID): void => {
    setStateTo({ ...state, activeContentID: contentID });
  }
  
  return(
    <AppContext.Provider value={{ state, user: state.user, setStateTo, selectContentID }}>
      <div id="discord-app">
        <Navbar />
        <ContentNavigator />
        <ActiveContent />
      </div>
    </AppContext.Provider>
  )
}

ReactDOM.render(<Discord />, document.getElementById("root"));