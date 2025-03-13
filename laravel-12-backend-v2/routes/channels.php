<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('samle.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
