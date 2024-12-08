GIT SETUP steps
1. git init
2. git branch -M main (**to change default branch to "main")
    git config --global user.email "12ishusharma@gmail.com"
        git config --global user.email "ishu-sharmaa"
 3.git add .
4. git commit -m""
5. git remote add origin git@github.com:ishu-sharmaa/react-app (Just once, it set up our local code to remote repository)
6. git push origin main (origin : that is repo, main: main branch)

Steps before pushing, SSH verification
1. mkdir -p ~/.ssh //create .ssh directory in local
2. chmod 700 ~/.ssh //to ensure .ssh directory has correct permissions

1.  ssh-keygen -t ed25519 -C "12ishusharma@gmail.com"

2. $ clip < ~/.ssh/id_ed25519.pub

ssh kry >> 
SHA256:NR/RTgjGsefRetrx5ElF6ue1c5H3oA/gyfUu8ZA64u0 12ishusharma@gmail.com

