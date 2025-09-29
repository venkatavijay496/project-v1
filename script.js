document.addEventListener('DOMContentLoaded', function() {
    // 1. Get all buttons that act as dropdown triggers
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // 2. Loop through each branch button to toggle the dropdown menu
    dropdownToggles.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);
            const isCurrentlyOpen = targetDropdown.classList.contains('show');

            // --- Close ALL Dropdowns ---
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });

            // --- Open the Clicked Dropdown (if it wasn't open already) ---
            if (!isCurrentlyOpen) {
                targetDropdown.classList.add('show');
            }
        });
    });
    
    // ----------------------------------------------------
    // 3. NEW FEATURE: Add navigation to the year links
    // ----------------------------------------------------
    const yearLinks = document.querySelectorAll('.year-link');

    yearLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            // Navigate the user to the new login page
            window.location.href = 'login.html';
        });
    });
    // ----------------------------------------------------


    // 4. Close dropdowns when the user clicks anywhere else
    document.addEventListener('click', function(event) {
        let isClickInsideDropdown = false;
        
        document.querySelectorAll('.dropdown-container').forEach(container => {
            if (container.contains(event.target)) {
                isClickInsideDropdown = true;
            }
        });

        if (!isClickInsideDropdown) {
             document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});