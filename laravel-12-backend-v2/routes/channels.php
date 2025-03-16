<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('sample.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
