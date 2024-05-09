<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessVideosToUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'video_id',
        'user_id',
    ];

    public function Users()
    {
        return $this->belongsTo(User::class);
    }

    public function videos()
    {
        return $this->belongsTo(Video::class);
    }
}
