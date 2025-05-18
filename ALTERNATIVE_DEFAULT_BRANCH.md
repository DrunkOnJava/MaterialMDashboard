# Alternative Ways to Set Default Branch

If you don't see the switch button in the Branches settings, here are alternative approaches:

## Option 1: Check Your Permissions

You need admin access to change the default branch. Check if you have the necessary permissions:

1. Go to the repository Settings
2. Look for "Manage access" or "Collaborators" in the sidebar
3. Verify you have admin rights (you should see your username with "Admin" role)

## Option 2: Using the Main Settings Page

Sometimes the option appears in a different location:

1. Go to Settings → General (not Branches)
2. Scroll down to find "Default branch" section
3. Look for a dropdown or edit option there

## Option 3: Create a New Rule

If you can't directly change the default branch:

1. In Branches settings, try creating a new "Branch protection rule"
2. Set the pattern to `main`
3. Save the rule
4. This might unlock the ability to change the default branch

## Option 4: Contact Repository Owner

If you're not the repository owner:

1. The user "DrunkOnJava" needs to make this change
2. They need to go to Settings → Branches
3. They'll see the option to change the default branch

## Option 5: Using GitHub Support

If you are the owner but still can't see the option:

1. This might be a UI issue
2. Try refreshing the page or using a different browser
3. Clear browser cache and cookies for GitHub
4. If still not working, contact GitHub support

## Workaround: Update README

As a temporary measure, you can update the README to indicate that `main` is the active development branch:

```markdown
## Default Branch
Please note: The active development branch is `main`. All pull requests should target the `main` branch.
```

## Check Current Permissions

Run this command to see your access level:

```bash
gh api repos/DrunkOnJava/MaterialMDashboard | jq .permissions
```

This will show if you have admin access needed to change the default branch.