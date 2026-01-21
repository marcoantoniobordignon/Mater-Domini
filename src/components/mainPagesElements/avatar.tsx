import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAvatar } from "@/contexts/avatarCtx";

export const AvatarElement = () => {
    const { avatar } = useAvatar();

    return (
        <Avatar className="mr-4">
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
